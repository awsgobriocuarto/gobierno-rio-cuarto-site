import ContactItem from "../commons/ContactItem";
import MapEmbed from "../commons/MapEmbed";

export default function HeroAreas({ area }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  console.log(area.contact.length);

  const contact = area.contact || [];

  const addressItem = contact.find(item => item.type === 'address');
  const baseAddress = addressItem ? addressItem.value : null;

  return (
    <section className="area-hero">
      <h1 className="mb-4">{area.name || "Área sin nombre"}</h1>


      <p
        className="mb-4"
        dangerouslySetInnerHTML={{
          __html: area.propouse || null,
        }}
      ></p>

      <a href="#" className="btn btn-sm btn-primary text-white mb-5">
        Ver más
      </a>

      {area.contact.length > 0 && (
        <div className="card">
          <div className="card-header"><h5 className="mb-0">Información de Contacto</h5></div>
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
              <div className="col-md-5 order-1">
                {baseAddress && <MapEmbed address={baseAddress} area={area.name} />}
              </div>
            </div>
          </div>
        </div>
      )}



    </section>
  );
}
