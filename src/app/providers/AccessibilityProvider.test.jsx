import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { AccessibilityProvider, useAccessibility } from "./AccessibilityProvider";

// Componente auxiliar que expone el contexto en el DOM para poder asertar.
// Esto es el patrón estándar para testear Context + hooks con RTL:
// en lugar de testear el hook aislado, lo usamos dentro de un componente real.
function TestConsumer() {
  const {
    fontSize,
    cycleFontSize,
    highContrast,
    toggleHighContrast,
    textSpacing,
    cycleTextSpacing,
    isUpperCase,
    toggleUpperCase,
    isDyslexiaFriendlyFontEnabled,
    toggleDyslexiaFriendlyFont,
  } = useAccessibility();

  return (
    <div>
      <span data-testid="fontSize">{fontSize}</span>
      <span data-testid="highContrast">{String(highContrast)}</span>
      <span data-testid="textSpacing">{textSpacing}</span>
      <span data-testid="isUpperCase">{String(isUpperCase)}</span>
      <span data-testid="dyslexia">{String(isDyslexiaFriendlyFontEnabled)}</span>
      <button onClick={cycleFontSize}>Fuente</button>
      <button onClick={toggleHighContrast}>Contraste</button>
      <button onClick={cycleTextSpacing}>Espaciado</button>
      <button onClick={toggleUpperCase}>Mayúsculas</button>
      <button onClick={toggleDyslexiaFriendlyFont}>Dislexia</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <AccessibilityProvider>
      <TestConsumer />
    </AccessibilityProvider>
  );
}

describe("AccessibilityProvider", () => {
  // --- Estado inicial ---

  it("provee valores iniciales correctos", () => {
    renderWithProvider();
    expect(screen.getByTestId("fontSize").textContent).toBe("0");
    expect(screen.getByTestId("highContrast").textContent).toBe("false");
    expect(screen.getByTestId("textSpacing").textContent).toBe("0");
    expect(screen.getByTestId("isUpperCase").textContent).toBe("false");
    expect(screen.getByTestId("dyslexia").textContent).toBe("false");
  });

  // --- cycleFontSize ---
  //
  // Hay 5 tamaños (índices 0-4). Después del 4 vuelve al 0.

  it("cycleFontSize incrementa el índice de tamaño de fuente", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Fuente"));
    expect(screen.getByTestId("fontSize").textContent).toBe("1");
  });

  it("cycleFontSize vuelve a 0 después de los 5 tamaños disponibles", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    const btn = screen.getByText("Fuente");
    // 5 clicks = ciclo completo
    await user.click(btn);
    await user.click(btn);
    await user.click(btn);
    await user.click(btn);
    await user.click(btn);
    expect(screen.getByTestId("fontSize").textContent).toBe("0");
  });

  // --- toggleHighContrast ---

  it("toggleHighContrast alterna entre false y true", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Contraste"));
    expect(screen.getByTestId("highContrast").textContent).toBe("true");
  });

  it("toggleHighContrast agrega la clase high-contrast al body", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Contraste"));
    expect(document.body.classList.contains("high-contrast")).toBe(true);
  });

  it("toggleHighContrast quita la clase high-contrast al desactivar", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Contraste"));
    await user.click(screen.getByText("Contraste"));
    expect(document.body.classList.contains("high-contrast")).toBe(false);
  });

  // --- toggleUpperCase ---

  it("toggleUpperCase agrega la clase uppercase-text al body", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Mayúsculas"));
    expect(document.body.classList.contains("uppercase-text")).toBe(true);
  });

  // --- toggleDyslexiaFriendlyFont ---

  it("toggleDyslexiaFriendlyFont agrega la clase dyslexia-friendly-font al body", async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByText("Dislexia"));
    expect(document.body.classList.contains("dyslexia-friendly-font")).toBe(true);
  });

  // --- Error fuera del Provider ---
  //
  // Si alguien usa useAccessibility() sin envolver su componente en
  // <AccessibilityProvider>, debe lanzar un error descriptivo.

  it("useAccessibility lanza error cuando se usa fuera del Provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow(
      "useAccessibility debe ser usado dentro de un AccessibilityProvider"
    );
    spy.mockRestore();
  });
});
