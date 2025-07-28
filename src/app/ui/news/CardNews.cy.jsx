import React from "react";
import { mount } from "@cypress/react18"; // Si usas React 18, si no, @cypress/react
import CardNews from "./CardNews";

describe("<CardNews />", () => {
  // Objeto mock para simular una noticia, con todas las propiedades que usa el componente.
  const mockPost = {
    id: 1,
    title: "Noticia de Prueba Importante",
    description:
      "Este es un breve resumen de una noticia de prueba para verificar el renderizado del componente.",
    image: "https://via.placeholder.com/300x200?text=Noticia", // URL de imagen de prueba
    slug: "noticia-de-prueba-importante",
    createdAt: "2023-01-01T10:00:00Z",
    body: "<p>Contenido completo de la noticia.</p>",
    iframe: "",
  };

  it("debe renderizar la información de la noticia correctamente", () => {
    mount(<CardNews post={mockPost} />);

    // Verificar que la imagen se renderice con sus atributos correctos
    cy.get(".card-img-top")
      .should("be.visible")
      .and("have.attr", "src", mockPost.image)
      .and("have.attr", "alt", mockPost.title)
      .and("have.attr", "width", "300")
      .and("have.attr", "height", "200");

    // Verificar que el título de la noticia se muestre
    cy.get(".card-title").should("be.visible").and("contain", mockPost.title);

    // Verificar que la descripción se muestre
    cy.get(".card-text")
      .should("be.visible")
      .and("contain", mockPost.description);
  });

  it("debe tener el enlace del título apuntando a la URL correcta de la noticia", () => {
    mount(<CardNews post={mockPost} />);

    // Verificar el atributo 'href' del enlace del título
    cy.get(".card-title").should("have.attr", "href", `/news/${mockPost.slug}`);
  });

  it("debe contener las clases CSS esperadas para la tarjeta y el enlace", () => {
    mount(<CardNews post={mockPost} />);

    cy.get(".card").should("be.visible");
    cy.get(".col-md-4").should("have.class", "mb-4"); // Verifica la clase del contenedor
    cy.get(".card-body").should("be.visible");
    cy.get(".card-title").should("have.class", "card-title"); // Aunque sea un Link, mantiene la clase
  });
});
