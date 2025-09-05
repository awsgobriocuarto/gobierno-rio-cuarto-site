export default function SearchResults({ results, query }) {
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
      {/* Aquí iría tu lógica para mostrar los resultados */}
      {results.length}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
