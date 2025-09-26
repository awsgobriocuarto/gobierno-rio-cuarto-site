export default function IntitutionalAreas({ area }) {
  const persons = area.persons;

  if (!persons || persons.length === 0) {
    return null;
  }

  const sortedPersons = persons.sort((a, b) => a.order - b.order);

  return (
    <div className="area-institutional">
      <h3 className="news-related--subtitle">Institucional</h3>
      <div className="row">
        {sortedPersons.map((p) => (
          <div key={p.id} className="col-12 col-md-6 mb-4 d-flex">
            <div className="card  ">
              <div className="">
                {p.image_url && (
                  //eslint-disable-next-line 
                  <img
                    src={p.image_url}
                    alt={p.name}
                    className="card-img-top "
                  />
                )}
              </div>
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
