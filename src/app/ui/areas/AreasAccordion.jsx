"use client";

export default function AreasAccordion({ areasData }) {
  if (!areasData || areasData.length === 0) {
    return <p>No hay autoridades disponibles.</p>;
  }

  return (
    <div className="areas-directory">
      {areasData.map((area, index) => {
        // Skip areas with no persons
        if (!area.persons || area.persons.length === 0) return null;

        // Sort persons by order
        const sortedPersons = [...area.persons].sort(
          (a, b) => a.order - b.order,
        );

        return (
          <div className="area-section" key={area.id || index}>
            <h2 className="area-section-title">{area.name}</h2>

            <div className="area-institutional">
              <div className="row">
                {sortedPersons.map((p) => (
                  <div
                    key={p.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
                  >
                    <div className="card h-100">
                      <img
                        src={p.image_url ? p.image_url : "/images/no-image.jpg"}
                        alt={p.name}
                        className="card-img-top"
                      />
                      <div className="card-body d-flex flex-column">
                        <h3 className="card-title">{p.name}</h3>
                        <h4 className="card-subtitle">{p.position}</h4>
                      </div>
                      <div className="card-footer">
                        {p.curriculum && (
                          <a
                            href={p.curriculum}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-link"
                          >
                            CV
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="area-section-divider" />
          </div>
        );
      })}
    </div>
  );
}
