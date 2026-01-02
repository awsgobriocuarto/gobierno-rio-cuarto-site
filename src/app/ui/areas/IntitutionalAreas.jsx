export default function IntitutionalAreas({ area }) {
  const persons = area.persons;

  if (!persons || persons.length === 0) {
    return null;
  }

  const sortedPersons = persons.sort((a, b) => a.order - b.order);

  return (
    <div className="area-institutional">
      <h4>Organigramardopolis</h4>
      <div className="row">
        {sortedPersons.map((p) => (
          <div key={p.id} className="col-12 col-md-6">
            <div className="card">
              {/* eslint-disable-next-line */}
              <img
                src={p.image_url ? p.image_url : "/images/no-image.jpg"}
                alt={p.name}
                className="card-img-top "
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
                    className="cv-link "
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
  );
}
