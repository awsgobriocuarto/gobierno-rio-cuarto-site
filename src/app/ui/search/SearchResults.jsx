export default function SearchResults({ results, query }) {
  //console.log("results:", results);
  const { entries, procedures, posts, areas, categories } = results;

  console.log("entries:", entries);
  console.log("procedures:", procedures);
  console.log("posts:", posts);

  if (!results) {
    return (
      <div>
        <h1>Por favor, ingresa un término de búsqueda.</h1>
      </div>
    );
  }

  // Lógica para mostrar resultados de búsqueda
  return (
    <div>
      <h1>Resultados de búsqueda para:</h1>
      <h2 className="text-primary fw-bold text-uppercase mt-3 display-4">
        {query}
      </h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Posts {posts.data.length}</h5>
          {posts.data.length > 0 && (
            <ul className="">
              {posts.data.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <h5>Procedures {procedures.data.length}</h5>
          {procedures.data.length > 0 && (
            <ul className="">
              {procedures.data.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <h5>Entries {entries.data.length}</h5>
          {entries.data.length > 0 && (
            <ul className="">
              {entries.data.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <h5>Area {areas.data.length}</h5>
          {areas.data.length > 0 && (
            <ul className="">
              {areas.data.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <h5>Category {categories.data.length}</h5>
          {categories.data.length > 0 && (
            <ul className="">
              {categories.data.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
