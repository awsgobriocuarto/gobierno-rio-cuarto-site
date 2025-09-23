import React from "react";

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
        <h2>{area.name || "Área sin nombre"}</h2>
        <p className="lead mb-4">
          {area.propouse || "No hay descripción o propósito."}
        </p>
        <h4 className="mb-3">Información de Contacto</h4>

        <div className="info-list">
          {Object.entries(groupedInfo).map(([type, values]) => {
            const formattedValues = values.join(", ");
            const icon = ICONS[type] || null;

            return (
              <div className="info-item mb-3" key={type}>
                {icon && <span className="me-2">{icon}</span>}
                <span>{formattedValues}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
