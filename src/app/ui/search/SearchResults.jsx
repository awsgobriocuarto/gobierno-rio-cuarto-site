import SeachResultGroup from "./SeachResultGroup";

export default async function SearchResults({ results, query }) {
  //console.log("results:", results);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { entries, procedures, posts, areas, categories } = results;


  if (!results) {
    return (
      <div>
        <h1>Por favor, ingresa un término de búsqueda.</h1>
      </div>
    );
  }

  // Lógica para mostrar resultados de búsqueda
  return (
    <div className="search-content">
      <div className="search-header">
        <h4>Término de búsqueda: <span>{`"${query}"`}</span></h4>
      </div>
      <div className="search-results">

        {/* Trámites */}
        {procedures.data.length && procedures.data.length > 0 ? (
          <SeachResultGroup url="/tramites/" title="Trámites" results={procedures.data} />
        ) : ("")}

        {/* Noticias */}
        {posts.data.length && posts.data.length > 0 ? (
          <SeachResultGroup url="/noticias/" title="Noticias" results={posts.data} />
        ) : ("")}

        {/* Categorias de Tramites */}
        {categories.data.length && categories.data.length > 0 ? (
          <SeachResultGroup url="/tramites?category=" title="Categorias de Tramites" results={categories.data} />
        ) : ("")}

        {/* Entry */}
        {entries.data.length && entries.data.length > 0 ? (
          <SeachResultGroup url="/seccion/" title="Programas y Servicios" results={entries.data} />
        ) : ("")}
      </div>
    </div>

  );
}
