import { describe, it, expect } from "vitest";
import { parseAreaPropouse } from "./areaUtils";

// parseAreaPropouse es una función PURA: no depende de ningún módulo externo,
// solo transforma texto → objeto. Se pueden testear todos los casos sin mocks.

describe("parseAreaPropouse", () => {
  // --- Casos edge ---

  it("retorna intro vacía y sections vacío cuando el input es null", () => {
    expect(parseAreaPropouse(null)).toEqual({ intro: "", sections: {} });
  });

  it("retorna intro vacía y sections vacío cuando el input es string vacío", () => {
    expect(parseAreaPropouse("")).toEqual({ intro: "", sections: {} });
  });

  it("devuelve todo el contenido como intro cuando no hay pillars", () => {
    const html = "<p>Bienvenidos al gobierno de Río Cuarto</p>";
    const result = parseAreaPropouse(html);
    expect(result.intro).toBe(html);
    expect(result.sections).toEqual({});
  });

  // --- Separación intro / pillar ---

  it("separa el intro del primer pillar correctamente", () => {
    const html =
      "<p>Texto introductorio</p>CIUDAD HABITABLE Y SUSTENTABLE<p>Contenido del pilar</p>";
    const result = parseAreaPropouse(html);
    // Todo lo que va ANTES del primer pillar es el intro
    expect(result.intro).toBe("<p>Texto introductorio</p>");
    // El contenido del pillar está dentro de la sección correspondiente
    expect(result.sections["CIUDAD HABITABLE Y SUSTENTABLE"]).toContain(
      "Contenido del pilar"
    );
  });

  it("limpia etiquetas <p> vacías al final del intro", () => {
    const html = "<p>Intro</p><p></p>CIUDAD DE OPORTUNIDADES<p>x</p>";
    const result = parseAreaPropouse(html);
    expect(result.intro).not.toMatch(/<p>\s*<\/p>$/);
  });

  // --- Case-insensitive ---

  it("encuentra pillar en minúsculas (case-insensitive)", () => {
    const html = "Intro<br/>ciudad habitable y sustentable<p>Contenido</p>";
    const result = parseAreaPropouse(html);
    expect(result.sections["CIUDAD HABITABLE Y SUSTENTABLE"]).toBeDefined();
  });

  // --- Múltiples pillars ---

  it("extrae dos pillars y acota correctamente el contenido de cada uno", () => {
    const html = [
      "<p>Introducción general</p>",
      "CIUDAD HABITABLE Y SUSTENTABLE",
      "<p>Contenido habitable</p>",
      "CIUDAD CENTRADA EN LAS PERSONAS",
      "<p>Contenido personas</p>",
    ].join("");

    const result = parseAreaPropouse(html);

    expect(result.sections["CIUDAD HABITABLE Y SUSTENTABLE"]).toContain(
      "Contenido habitable"
    );
    expect(result.sections["CIUDAD CENTRADA EN LAS PERSONAS"]).toContain(
      "Contenido personas"
    );

    // El primer pillar NO debe incluir el contenido del segundo
    expect(result.sections["CIUDAD HABITABLE Y SUSTENTABLE"]).not.toContain(
      "Contenido personas"
    );
  });

  it("los cuatro pillars tienen su propia sección", () => {
    const pillars = [
      "CIUDAD HABITABLE Y SUSTENTABLE",
      "CIUDAD CENTRADA EN LAS PERSONAS",
      "CIUDAD DE OPORTUNIDADES",
      "UN GOBIERNO CERCANO, PARTICIPATIVO Y EFICIENTE",
    ];
    const html = pillars.map((p) => `${p}<p>contenido de ${p}</p>`).join("");

    const result = parseAreaPropouse(html);

    pillars.forEach((p) => {
      expect(result.sections[p]).toBeDefined();
    });
  });
});
