import React from "react";

export default function HeroAreas({ area }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  const contactInfo = area.contactInfo || [
    { type: "address", value: "una direccion" },
    { type: "address", value: "otra direccion" },
    { type: "phone", value: "123456789" },
    { type: "phone", value: "987654321" },
    { type: "schedules", value: "06:00 - 14:00" },
    { type: "web", value: "https://uiverse.io/forms" },
    { type: "web", value: "https://uiverse.io/forms" },
    { type: "email", value: "prueba@gmail.com" },
  ];

  const groupedInfo = contactInfo.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item.value);
    return acc;
  }, {});

  // Relaciona cada tipo con su icono
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
        <h2>{area.name || "No hay área"}</h2>
        <p className="lead mb-4">{area.description || "No hay descripción"}</p>
        <h4 className="mb-3">Información Básica</h4>

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
