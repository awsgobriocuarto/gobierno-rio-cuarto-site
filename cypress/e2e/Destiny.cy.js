// cypress/e2e/events.cy.js

describe("Flujo de eventos - Navegación a sitio externo", () => {
  const APP_URL = "http://localhost:3000";
  const EXTERNAL_URL = "https://destinoriocuarto.gob.ar"; // Definición de la variable

  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it("1. Debería navegar a un sitio externo al hacer clic en una tarjeta de evento", () => {
    cy.contains("h2", "Eventos").should("be.visible");

    cy.get('.card a[href*="destinoriocuarto"]')
      .first()
      .should("have.attr", "target", "_blank")
      .then(($link) => {
        cy.wrap($link).invoke("removeAttr", "target");
      })
      .click();

    // *** Uso de cy.origin() con argumentos para pasar la variable ***
    // Pasamos tanto la URL externa como el título como argumentos.
    cy.origin(EXTERNAL_URL, { args: { EXTERNAL_URL } }, ({ EXTERNAL_URL }) => {
      // Ahora, la variable EXTERNAL_URL es accesible en este contexto
      cy.url().should("include", EXTERNAL_URL);
    });
  });
});
