import { describe, it, expect } from "vitest";
import { createPageMetadata } from "./metadata";

// createPageMetadata también es una función pura.
// Testea que la estructura de metadatos que Next.js espera sea correcta
// y que los defaults se apliquen bien.

describe("createPageMetadata", () => {
  // --- Campos requeridos ---

  it("incluye título y descripción en el objeto raíz", () => {
    const result = createPageMetadata({
      title: "Noticias | Río Cuarto",
      description: "Últimas noticias de la ciudad",
    });
    expect(result.title).toBe("Noticias | Río Cuarto");
    expect(result.description).toBe("Últimas noticias de la ciudad");
  });

  it("sincroniza el título en openGraph y twitter", () => {
    const result = createPageMetadata({ title: "Mi Título", description: "D" });
    expect(result.openGraph.title).toBe("Mi Título");
    expect(result.twitter.title).toBe("Mi Título");
  });

  // --- Imagen ---

  it("usa la imagen por defecto cuando no se pasa imageUrl", () => {
    const result = createPageMetadata({ title: "T", description: "D" });
    expect(result.openGraph.images[0].url).toBe("/images/og-default.png");
    expect(result.twitter.images[0]).toBe("/images/og-default.png");
  });

  it("usa la imageUrl provista cuando se pasa", () => {
    const url = "https://cdn.riocuarto.gob.ar/imagen.jpg";
    const result = createPageMetadata({ title: "T", description: "D", imageUrl: url });
    expect(result.openGraph.images[0].url).toBe(url);
    expect(result.twitter.images[0]).toBe(url);
  });

  // --- Tipo Open Graph ---

  it("el tipo por defecto es 'website'", () => {
    const result = createPageMetadata({ title: "T", description: "D" });
    expect(result.openGraph.type).toBe("website");
  });

  it("permite sobrescribir el tipo a 'article'", () => {
    const result = createPageMetadata({ title: "T", description: "D", type: "article" });
    expect(result.openGraph.type).toBe("article");
  });

  // --- URL canónica ---

  it("NO incluye url en openGraph cuando no se provee", () => {
    const result = createPageMetadata({ title: "T", description: "D" });
    expect(result.openGraph.url).toBeUndefined();
  });

  it("incluye url en openGraph cuando se provee", () => {
    const result = createPageMetadata({ title: "T", description: "D", url: "/noticias" });
    expect(result.openGraph.url).toBe("/noticias");
  });

  // --- Twitter card ---

  it("siempre usa 'summary_large_image' para Twitter", () => {
    const result = createPageMetadata({ title: "T", description: "D" });
    expect(result.twitter.card).toBe("summary_large_image");
  });
});
