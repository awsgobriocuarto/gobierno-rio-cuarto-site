import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CombinedEntriesClient from "./CombinedEntriesClient";

// EntriesCard es un componente complejo con íconos y lógica de colores.
// Lo mockeamos porque lo que nos interesa testear ACÁ es la lógica del
// "ver más / ver menos", no el renderizado interno de cada tarjeta.
vi.mock("./EntriesCard", () => ({
  default: ({ entry }) => (
    <div data-testid="entry-card">{entry.title}</div>
  ),
}));

function makeEntries(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Programa ${i + 1}`,
  }));
}

describe("CombinedEntriesClient", () => {
  // --- Con pocos items (≤ 8) ---

  it("muestra todos los items cuando son 5 (menos que el límite)", () => {
    render(<CombinedEntriesClient entries={makeEntries(5)} />);
    expect(screen.getAllByTestId("entry-card")).toHaveLength(5);
  });

  it("no muestra el botón cuando hay 8 o menos items", () => {
    render(<CombinedEntriesClient entries={makeEntries(8)} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  // --- Con muchos items (> 8) ---

  it("muestra solo 8 items al inicio cuando hay más de 8", () => {
    render(<CombinedEntriesClient entries={makeEntries(12)} />);
    expect(screen.getAllByTestId("entry-card")).toHaveLength(8);
  });

  it("muestra el botón 'Ver más' con el conteo de items ocultos", () => {
    render(<CombinedEntriesClient entries={makeEntries(12)} />);
    // 12 - 8 = 4 ocultos
    expect(
      screen.getByRole("button", { name: /ver más programas y servicios \(4\)/i })
    ).toBeInTheDocument();
  });

  // --- Toggle ver más / ver menos ---

  it("al hacer clic en 'Ver más' muestra todos los items", async () => {
    const user = userEvent.setup();
    render(<CombinedEntriesClient entries={makeEntries(12)} />);

    await user.click(screen.getByRole("button", { name: /ver más/i }));

    expect(screen.getAllByTestId("entry-card")).toHaveLength(12);
  });

  it("al hacer clic en 'Ver más' el botón cambia a 'Ver menos'", async () => {
    const user = userEvent.setup();
    render(<CombinedEntriesClient entries={makeEntries(12)} />);

    await user.click(screen.getByRole("button", { name: /ver más/i }));

    expect(screen.getByRole("button", { name: /ver menos/i })).toBeInTheDocument();
  });

  it("al hacer clic en 'Ver menos' vuelve a mostrar solo 8 items", async () => {
    const user = userEvent.setup();
    render(<CombinedEntriesClient entries={makeEntries(12)} />);

    await user.click(screen.getByRole("button", { name: /ver más/i }));
    await user.click(screen.getByRole("button", { name: /ver menos/i }));

    expect(screen.getAllByTestId("entry-card")).toHaveLength(8);
  });

  it("muestra exactamente 9 items cuando hay 9 (límite + 1)", () => {
    render(<CombinedEntriesClient entries={makeEntries(9)} />);
    // El botón aparece porque hay más que INITIAL_COUNT
    expect(screen.getAllByTestId("entry-card")).toHaveLength(8);
    expect(screen.getByRole("button", { name: /ver más programas y servicios \(1\)/i })).toBeInTheDocument();
  });
});
