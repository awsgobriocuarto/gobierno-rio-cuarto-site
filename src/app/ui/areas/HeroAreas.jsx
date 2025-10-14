import React from "react";

export default function HeroAreas({ area }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  const contact = area.contact || [];

  const SOCIAL_TYPES = [
    "instagram",
    "facebook",
    "twitter",
    "youtube",
    "whatsapp",
    "tiktok",
  ];

  const LINK_WITH_LABEL_TYPES = ["web"];

  const simpleInfo = [];
  const socialLinks = [];

  contact.forEach((item) => {
    if (SOCIAL_TYPES.includes(item.type)) {
      socialLinks.push(item);
    } else {
      simpleInfo.push(item);
    }
  });

  const groupedSimpleInfo = simpleInfo.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item.value);
    return acc;
  }, {});

  const simpleInfoEntries = Object.entries(groupedSimpleInfo);
  const hasContactInfo = simpleInfoEntries.length > 0 || socialLinks.length > 0;

  const ICONS = {
    address: <i className="fas fa-location-dot"></i>,
    phone: <i className="fas fa-phone"></i>,
    schedules: <i className="fas fa-clock"></i>,
    web: <i className="fas fa-globe"></i>,
    email: <i className="fas fa-envelope"></i>,
    // Redes Sociales
    facebook: <i className="fab fa-facebook"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    youtube: <i className="fab fa-youtube"></i>,
    whatsapp: <i className="fab fa-whatsapp"></i>,
    tiktok: <i className="fab fa-tiktok"></i>,
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <section className="area-hero">
      <div className="">
        <h1>{area.name || "Área sin nombre"}</h1>
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: area.propouse || null,
          }}
        ></p>

        <a href="#" className="btn btn-sm btn-primary text-white">
          Ver más
        </a>

        {hasContactInfo && (
          <>
            <h5 className="mt-4 mb-3">Información de Contacto</h5>

            <div className="info-list">
              {simpleInfoEntries.map(([type, values]) => {
                const icon = ICONS[type] || null;
                if (LINK_WITH_LABEL_TYPES.includes(type)) {
                  return values.map((value, index) => (
                    <div
                      className="p-2 border-start border-3 border-primary bg-light"
                      key={`${type}-${index}`}
                    >
                      <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enlace a Web: ${value}`}
                        className="text-dark text-decoration-none d-flex align-items-center"
                      >
                        <span className="text-primary me-2 fs-5">{icon}</span>

                        <span className="ms-1 text-primary text-break">
                          {value}
                        </span>
                      </a>
                    </div>
                  ));
                }

                const formattedValues = values.join(", ");

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

              {socialLinks.length > 0 && (
                <div
                  className="p-2 border-start border-3 border-primary bg-light"
                  key="social"
                >
                  <div className="d-flex gap-3 align-items-center">
                    {socialLinks.map((item, index) => {
                      const icon = ICONS[item.type] || null;
                      return (
                        <a
                          key={`${item.type}-${index}`}
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Enlace a ${capitalize(item.type)}`}
                          className="text-primary fs-4"
                        >
                          {icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
