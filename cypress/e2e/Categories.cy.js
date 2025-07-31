// cypress/e2e/categories_formalities.cy.js

describe("Flujo de categorías y trámites", () => {
  const API_BASE_URL_FOR_TESTS = "http://localhost:3000"; // Ajusta si es diferente
  const API_VERSION_FOR_TESTS = "v1";
  const API_BASE_PATH = `${API_BASE_URL_FOR_TESTS}/api/${API_VERSION_FOR_TESTS}`;

  beforeEach(() => {
    // Intercepta SOLO las llamadas del cliente, como las que Next.js podría hacer
    // para los trámites después de la navegación.
    cy.intercept(
      "GET",
      `${API_BASE_PATH}/tramites?category=automotor-comercio-inmueble`,
      {
        statusCode: 200,
        body: [
          {
            id: "form1",
            title: "Solicitud de Prescripción",
            summary: "Consiste en la solicitud de prescripción de deuda...",
            slug: "solicitud-de-prescripcion",
            online: 1,
            url: "https://tu-enlace-de-ejemplo.com",
            area: { name: "Departamento de Contribuciones Varias" },
            category: { name: "Automotor / Comercio / Inmueble" },
          },
          {
            id: "form2",
            title: "Verificación de Pago",
            summary: "Consiste en la solicitud de acreditación de un pago...",
            slug: "verificacion-de-pago",
            online: 1,
            url: "https://tu-enlace-de-ejemplo.com",
            area: { name: "Subdirección General de Atención al Público" },
            category: { name: "Automotor / Comercio / Inmueble" },
          },
        ],
      }
    ).as("getAutomotorFormalities");

    // Intercepta la llamada al detalle del trámite, que probablemente también se haga en el servidor,
    // pero si se hace en el cliente (por un <Link>), esta intercepción funcionará.
    cy.intercept("GET", `${API_BASE_PATH}/tramites/solicitud-de-prescripcion`, {
      statusCode: 200,
      body: {
        id: "form1",
        title: "Solicitud de Prescripción",
        summary:
          "Consiste en la solicitud de prescripción de deuda en el caso que haya...",
        slug: "solicitud-de-prescripcion",
        online: 1,
        url: "https://tu-enlace-de-ejemplo.com",
        area: { name: "Departamento de Contribuciones Varias" },
        category: { name: "Automotor / Comercio / Inmueble" },
      },
    }).as("getPrescripcionFormalitie");

    // Visita la página principal para iniciar el flujo
    cy.visit(API_BASE_URL_FOR_TESTS);
  });

  it("1. Debería mostrar las categorías en la página de inicio (sin interceptar la llamada de fetch)", () => {
    // Si la llamada se hace en el servidor, el contenido ya está en el DOM al cargar la página.
    // Simplemente verificamos que el contenido existe.
    cy.get("h2").should("contain", "Tramites");
    cy.contains(".card-title", "Automotor / Comercio / Inmueble", {
      timeout: 10000,
    }).should("be.visible");
    // Aumentamos el timeout para dar tiempo a Next.js a renderizar si es necesario
    cy.contains(".card-title", "Comercio").should("be.visible");
  });

  it('2. Debería navegar a la lista de trámites al hacer clic en "Automotor / Comercio / Inmueble"', () => {
    // Primero nos aseguramos de que el elemento existe antes de hacer clic.
    cy.contains(".card-title", "Automotor / Comercio / Inmueble")
      .should("be.visible")
      .click();

    // Verificamos que la URL ha cambiado. Esto es instantáneo.
    cy.url().should(
      "include",
      "/tramites?category=automotor-comercio-inmueble"
    );

    // Ahora, en lugar de esperar la petición, esperamos que el elemento que se renderiza con
    // los datos del servidor (el número de trámites y el título) aparezca en el DOM.
    // Esto es lo que significa "Testing el HTML final".
    cy.get("h2").should("contain", "Trámites", { timeout: 10000 }); // Aumentamos el timeout por si el SSR tarda
    cy.contains(".card-title", "Solicitud de Prescripción", {
      timeout: 10000,
    }).should("be.visible");
    cy.contains(".card-title", "Verificación de Pago").should("be.visible");

    // Puedes verificar el número exacto si lo deseas, pero esperar a que los títulos aparezcan es más robusto.
    // cy.get('h2').should('contain', '2 Trámites');
  });
  it('3. Debería navegar al detalle de un trámite al hacer clic en "Ver más información"', () => {
    // Repetimos los pasos para llegar a la página de trámites
    cy.contains(".card-title", "Automotor / Comercio / Inmueble")
      .should("be.visible")
      .click();
    cy.url().should(
      "include",
      "/tramites?category=automotor-comercio-inmueble"
    );
    cy.contains("h2", "Trámites").should("be.visible");

    // Hacemos clic en el enlace "Ver más información"
    cy.contains(".card-body", "Solicitud de Prescripción")
      .parent()
      .find("a.btn-dark")
      .should("contain", "Ver más información")
      .click();

    // Verificamos que la URL del detalle se ha cargado.
    cy.url().should("include", "/tramites/solicitud-de-prescripcion");

    // Ahora, esperamos que el contenido del detalle del trámite aparezca en el DOM.
    // Asumimos que esta llamada también se hizo en el servidor.
    cy.get("h3")
      .should("contain", "Solicitud de Prescripción", { timeout: 10000 })
      .should("be.visible");
  });
});
