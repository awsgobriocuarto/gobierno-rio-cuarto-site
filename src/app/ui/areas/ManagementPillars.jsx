"use client";

import React, { useState } from "react";

const PILLARS = [
  {
    title: "Ciudad habitable y sustentable",
    key: "CIUDAD HABITABLE Y SUSTENTABLE",
    color: "blue",
    icon: "fa-leaf",
  },
  {
    title: "Ciudad centrada en las personas",
    key: "CIUDAD CENTRADA EN LAS PERSONAS",
    color: "orange",
    icon: "fa-users",
  },
  {
    title: "Ciudad de oportunidades",
    key: "CIUDAD DE OPORTUNIDADES",
    color: "pink",
    icon: "fa-lightbulb",
  },
  {
    title: "Un Gobierno Cercano, Participativo y Eficiente",
    key: null,
    color: "green",
    icon: "fa-handshake",
    fullWidth: true,
  },
];

export default function ManagementPillars({ sections, intro }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const mainPillars = PILLARS.filter((p) => !p.fullWidth);
  const mottoPillar = PILLARS.find((p) => p.fullWidth);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMottoToggle = () => {
    setActiveIndex(activeIndex === "motto" ? null : "motto");
  };

  let activeContent = null;
  let activeTitle = "";
  let activeColor = "";

  if (typeof activeIndex === "number") {
    const p = mainPillars[activeIndex];
    activeContent = sections ? sections[p.key] : null;
    activeTitle = p.title;
    activeColor = p.color;
  } else if (activeIndex === "motto") {
    activeContent = intro;
    activeTitle = mottoPillar.title;
    activeColor = mottoPillar.color;
  }

  const RenderContent = () => (
    <div className={`active-pillar-content shadow-sm mt-3 ${activeColor}`}>
      <div className="content-wrapper p-4">
        <h4 className="fw-bold mb-3">{activeTitle}</h4>
        <div
          className="details-text"
          dangerouslySetInnerHTML={{ __html: activeContent }}
        />
        <div className="text-end mt-3">
          <button
            className="btn btn-outline-light btn-sm text-uppercase fw-bold"
            onClick={() => setActiveIndex(null)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="management-pillars my-5">
      <h2 className="mb-4 text-uppercase fw-bold h4">Ejes de Gestión</h2>

      {/* Row of Tab-style cards */}
      <div className="pillars-grid tabs-style">
        {mainPillars.map((pillar, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`pillar-card tab ${pillar.color} ${
                isActive ? "is-active" : ""
              } has-content`}
              onClick={() => handleToggle(index)}
            >
              <div className="pillar-content">
                <div className="pillar-header">
                  <i className={`fa-solid ${pillar.icon}`}></i>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expansion Box (if a tab is clicked) */}
      {typeof activeIndex === "number" && activeContent && <RenderContent />}

      {/* Motto Pillar (Green full width) */}
      <div className="pillars-grid mt-4">
        {mottoPillar && (
          <div
            className={`pillar-card full-width ${mottoPillar.color} has-content ${
              activeIndex === "motto" ? "is-active" : ""
            }`}
            onClick={handleMottoToggle}
          >
            <div className="pillar-content w-100">
              <div className="pillar-header">
                <i className={`fa-solid ${mottoPillar.icon}`}></i>
                <h3 className="pillar-title">{mottoPillar.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Expansion Box (if motto is clicked) */}
      {activeIndex === "motto" && activeContent && <RenderContent />}
    </section>
  );
}
