import ContactItem from "../commons/ContactItem";
import MapEmbed from "../commons/MapEmbed";

export default function HeroAreas({ area, propouseOverride }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  const contact = area.contact || [];

  const addressItem = contact.find((item) => item.type === "address");
  const baseAddress = addressItem ? addressItem.value : null;

  return (
    <section className="area-hero">
      <h5 className="area-hero-prename mb-2">{area.pre_name}</h5>
      <div className="area-hero-separator"></div>
      <h1 className="mb-4">{area.name || "Área sin nombre"}</h1>

      <div className="area-hero-description">
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: propouseOverride || area.propouse || "",
          }}
        ></p>
      </div>

      {area.contact.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">Información de Contacto</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-7 order-2">
                {area.contact.map((item, index) => (
                  <ContactItem
                    key={index}
                    type={item.type}
                    value={item.value}
                    label={item.info}
                  />
                ))}
              </div>
              {/* <div className="col-md-5 order-1">
                {baseAddress && (
                  <MapEmbed address={baseAddress} area={area.name} />
                )}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
