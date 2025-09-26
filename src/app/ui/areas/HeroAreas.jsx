import React from "react";
import HeaderSection from "../layout/HeaderSection";

export default function HeroAreas({ area }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  const contact = area.contact || [];

  const groupedInfo = contact.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item.value);
    return acc;
  }, {});

  const ICONS = {
    address: <i className="fas fa-location-dot"></i>,
    phone: <i className="fas fa-phone"></i>,
    schedules: <i className="fas fa-clock"></i>,
    web: <i className="fas fa-globe"></i>,
    email: <i className="fas fa-envelope"></i>,
  };

  return (
    <section className="area-hero">
      <div className="container">
        <h1>{area.name || "Área sin nombre"}</h1>
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: area.propouse || "No hay descripción o propósito.",
          }}
        ></p>

        <h4 className="mb-3">Información de Contacto</h4>

        <div className="info-list">
          {Object.entries(groupedInfo).map(([type, values]) => {
            const formattedValues = values.join(", ");
            const icon = ICONS[type] || null;

            return (
              <div
                className="p-2 border-start border-3 border-primary bg-light"
                key={type}
              >
                {icon && <span className="me-2 text-primary">{icon}</span>}
                <span>{formattedValues}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
