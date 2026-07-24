import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FormalitiesCard, { EXTERNAL_LINK_CATEGORY } from "./CardFormality";

// next/link se mockeaa como un <a> simple para no necesitar el router de Next.js.
// Esto es estándar en tests de componentes que usan Link.
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const tramiteBase = {
  title: "Habilitación Comercial",
  slug: "habilitacion-comercial",
  area: { name: "Secretaría de Gobierno" },
  categories: [{ name: "Comercio", image: "fa-store" }],
  online: 0,
  url: null,
};

describe("FormalitiesCard", () => {
  // --- Renderizado básico ---

  it("muestra el título del trámite", () => {
    render(<FormalitiesCard formality={tramiteBase} />);
    expect(screen.getByText("Habilitación Comercial")).toBeInTheDocument();
  });

  it("muestra el nombre del área", () => {
    render(<FormalitiesCard formality={tramiteBase} />);
    expect(screen.getByText("Secretaría de Gobierno")).toBeInTheDocument();
  });

  it("muestra 'Sin área' cuando area es null", () => {
    render(<FormalitiesCard formality={{ ...tramiteBase, area: null }} />);
    expect(screen.getByText("Sin área")).toBeInTheDocument();
  });

  // --- Lógica de routing ---
  //
  // Regla: si el trámite pertenece a "Pagos y Deudas" Y tiene online=1 con url,
  // se usa un <a> externo (target="_blank"). En cualquier otro caso, <Link> interno.

  it("usa Link interno (/tramites/slug) para un trámite normal", () => {
    render(<FormalitiesCard formality={tramiteBase} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/tramites/habilitacion-comercial");
    // No debe abrirse en pestaña nueva
    expect(link).not.toHaveAttribute("target");
  });

  it("usa <a> externo para Pagos y Deudas con online=1 y url", () => {
    const tramitePagos = {
      ...tramiteBase,
      categories: [{ name: EXTERNAL_LINK_CATEGORY, image: "fa-credit-card" }],
      online: 1,
      url: "https://pagos.riocuarto.gob.ar/deuda",
    };
    render(<FormalitiesCard formality={tramitePagos} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe(
      "https://pagos.riocuarto.gob.ar/deuda"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("usa Link interno para Pagos y Deudas cuando online=0", () => {
    // online=0 significa que NO tiene versión en línea habilitada
    const tramitePagos = {
      ...tramiteBase,
      categories: [{ name: EXTERNAL_LINK_CATEGORY, image: "fa-credit-card" }],
      online: 0,
      url: "https://pagos.riocuarto.gob.ar",
    };
    render(<FormalitiesCard formality={tramitePagos} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/tramites/habilitacion-comercial");
  });

  it("usa Link interno para Pagos y Deudas sin url aunque online=1", () => {
    const tramitePagos = {
      ...tramiteBase,
      categories: [{ name: EXTERNAL_LINK_CATEGORY, image: "fa-credit-card" }],
      online: 1,
      url: null,
    };
    render(<FormalitiesCard formality={tramitePagos} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/tramites/habilitacion-comercial");
  });

  it("usa Link interno para otra categoría aunque tenga online=1 y url", () => {
    // Solo "Pagos y Deudas" tiene el comportamiento especial
    const tramiteOtro = {
      ...tramiteBase,
      categories: [{ name: "Salud", image: "fa-heart" }],
      online: 1,
      url: "https://salud.riocuarto.gob.ar",
    };
    render(<FormalitiesCard formality={tramiteOtro} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/tramites/habilitacion-comercial");
  });
});
