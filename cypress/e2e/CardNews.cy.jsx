// cypress/e2e/news.cy.js

describe("Flujo de noticias y su detalle", () => {
  const API_NEWS_URL =
    "https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts";
  const APP_URL = "http://localhost:3000";

  // Datos mockeados que simulan la API de contenidos
  const mockNewsList = {
    data: [
      {
        id: 1,
        title:
          "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales",
        description:
          "La formación está a cargo de un instructor certificado...",
        main_picture: { medium: "https://ejemplo.com/genexus.jpg" },
        slug: "comenzo-la-capacitacion-en-genexus-para-modernizar-los-sistemas-municipales",
        created_at: "2024-07-25T10:00:00Z",
        body: "<p>La formación está a cargo de un instructor certificado en GeneXus y se desarrolla de manera virtual mediante la plataforma Meet...</p>",
        iframe: "",
      },
      {
        id: 2,
        title:
          "De Rivas participó de un encuentro regional de intendentes por el desarrollo municipal",
        description: "El intendente de Rivas participó de un encuentro...",
        main_picture: { medium: "https://ejemplo.com/intendentes.jpg" },
        slug: "de-rivas-participo-de-un-encuentro-regional-de-intendentes",
        created_at: "2024-07-24T12:30:00Z",
        body: "<p>Detalles del encuentro regional de intendentes.</p>",
        iframe: "",
      },
      {
        id: 3,
        title:
          "Río Cuarto realiza una inversión histórica en maquinaria y vehículos",
        description: "Se realizó una inversión histórica en maquinaria...",
        main_picture: { medium: "https://ejemplo.com/maquinaria.jpg" },
        slug: "rio-cuarto-realiza-una-inversion-historica-en-maquinaria-y-vehiculos",
        created_at: "2024-07-23T12:30:00Z",
        body: "<p>Cuerpo de la noticia relacionada 1.</p>",
        iframe: "",
      },
    ],
  };

  beforeEach(() => {
    // Interceptamos la llamada a la API de noticias para el listado de la home
    cy.intercept("GET", `${API_NEWS_URL}?limit=6`, {
      statusCode: 200,
      body: { data: mockNewsList.data },
    }).as("getNewsList");

    // Interceptamos la llamada a la API para las noticias relacionadas
    cy.intercept("GET", `${API_NEWS_URL}?limit=4`, {
      statusCode: 200,
      body: { data: mockNewsList.data.slice(1, 4) }, // Mockeamos para que la principal no aparezca
    }).as("getRelatedNews");

    cy.visit(APP_URL);
  });

  it("1. Debería mostrar la sección de noticias y navegar al detalle", () => {
    // Verificación de la página de inicio (imagen 1)
    cy.contains("h2", "Noticias").should("be.visible");
    cy.contains(
      ".card-title",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    ).should("be.visible");

    // Clic en la noticia y navegación
    cy.contains(
      ".card-title",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    ).click();
    cy.url().should(
      "include",
      "/news/comenzo-la-capacitacion-en-genexus-para-modernizar-los-sistemas-municipales"
    );

    // Verificación del detalle de la noticia (imagen 2)
    cy.get("h1").should(
      "contain",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    );
    cy.get("h1").should(
      "contain.html",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    );
    cy.get("img.card-img-top").should(
      "have.attr",
      "alt",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    );
  });

  it("2. Debería mostrar las noticias relacionadas correctamente en la página de detalle", () => {
    // Pasos para llegar a la página de detalle
    cy.contains(
      ".card-title",
      "Comenzó la capacitación en GeneXus para modernizar los sistemas municipales"
    ).click();
    cy.url().should(
      "include",
      "/news/comenzo-la-capacitacion-en-genexus-para-modernizar-los-sistemas-municipales"
    );

    // Verificación de la sección de noticias relacionadas (imagen 2)
    cy.contains("h5", "Noticias Relacionadas").should("be.visible");

    // Verificamos que las noticias relacionadas están presentes
    cy.get(".list-unstyled")
      .contains(
        "a",
        "De Rivas participó de un encuentro regional de intendentes por el desarrollo municipal"
      )
      .should("be.visible");
    cy.get(".list-unstyled")
      .contains(
        "a",
        "Río Cuarto realiza una inversión histórica en maquinaria y vehículos"
      )
      .should("be.visible");

    // Verificamos que la noticia principal NO aparece en la lista de relacionadas
    cy.get(".list-unstyled").should(
      "not.contain",
      "Comenzó la capacitación en GeneXus"
    );
  });
});
