// app/ui/areas/IntitutionalAreas.jsx
import Image from "next/image";

export default function IntitutionalAreas({ area }) {
  const persons = area.persons;

  if (!persons || persons.length === 0) {
    return (
      <div className="area-institutional">
        <h4>Institucional</h4>
        <div className="row">
          <div className="col-12 text-center">
            <p>No hay contactos institucionales para esta área.</p>
          </div>
        </div>
      </div>
    );
  }

  const sortedPersons = persons.sort((a, b) => a.order - b.order);

  return (
    <div className="area-institutional">
      <h4>Institucional</h4>
      <div className="row">
        {sortedPersons.map((p) => (
          <div key={p.id} className="col-12 mb-4">
            <div className="card">
              <div className="card-img-top">
                {p.image_url && (
                  <>
                    {/* eslint-disable-next-line */}
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="rounded intitutional-image"
                    />
                  </>

                )}
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <h4 className="card-subtitle">{p.position}</h4>
                {p.curriculum && (
                  <a
                    href={p.curriculum}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2"
                  >
                    Ver CV
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
