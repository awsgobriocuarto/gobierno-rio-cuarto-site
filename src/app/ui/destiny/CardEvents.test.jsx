import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardEvent from "./CardEvents";

// CardEvents no usa next/link ni next/image, así que no necesita mocks.
// El test principal verifica el fix de timezone: una fecha como
// "2025-07-04T22:00:00.000Z" (UTC) se debe mostrar como día 4, no día 3.

const mockPost = {
  title: "Dale Q Va en el Coloso",
  excerpt: "Banda de cuarteto cordobés, referentes del género.",
  cover: { medium: "/images/dale-q-va.jpg" },
  canonical_url: "/propuestas/dale-q-va-en-el-coloso",
  organization: { name: "Asociación Atlética Banda Norte" },
  categories: [],
  calendars: [{ start_date: "2025-07-04T22:00:00.000Z" }],
};

describe("CardEvent", () => {
  // --- Renderizado básico ---

  it("muestra el título del evento", () => {
    render(<CardEvent post={mockPost} />);
    expect(screen.getByText("Dale Q Va en el Coloso")).toBeInTheDocument();
  });

  it("muestra el excerpt", () => {
    render(<CardEvent post={mockPost} />);
    expect(
      screen.getByText("Banda de cuarteto cordobés, referentes del género.")
    ).toBeInTheDocument();
  });

  it("muestra el nombre de la organización", () => {
    render(<CardEvent post={mockPost} />);
    expect(
      screen.getByText("Asociación Atlética Banda Norte")
    ).toBeInTheDocument();
  });

  // --- Fix de timezone (el bug que corregimos) ---
  //
  // El problema: new Date("2025-07-04") se interpreta como UTC medianoche.
  // En Argentina (UTC-3) eso es el 3 de julio a las 21:00 hs → getDate() = 3.
  // La solución: slice(0, 10) + "T00:00:00" fuerza hora local → getDate() = 4 siempre.

  it("muestra el día 4 (no el 3) para una fecha con offset UTC", () => {
    render(<CardEvent post={mockPost} />);
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("no muestra el día 3 (regresión del bug de timezone)", () => {
    render(<CardEvent post={mockPost} />);
    expect(screen.queryByText("3")).not.toBeInTheDocument();
  });

  // --- Sin calendario ---

  it("no muestra el sticker de fecha cuando calendars está vacío", () => {
    render(<CardEvent post={{ ...mockPost, calendars: [] }} />);
    // Ni el día ni el mes deben aparecer
    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });

  it("no rompe cuando calendars es undefined", () => {
    render(<CardEvent post={{ ...mockPost, calendars: undefined }} />);
    expect(screen.getByText("Dale Q Va en el Coloso")).toBeInTheDocument();
  });

  // --- Construcción de URL ---

  it("reemplaza /propuestas/ por /experiencias/ en todos los links", () => {
    render(<CardEvent post={mockPost} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.getAttribute("href")).toContain("/experiencias/");
      expect(link.getAttribute("href")).not.toContain("/propuestas/");
    });
  });

  it("incluye el slug correcto en la URL", () => {
    render(<CardEvent post={mockPost} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.getAttribute("href")).toContain("dale-q-va-en-el-coloso");
    });
  });
});
