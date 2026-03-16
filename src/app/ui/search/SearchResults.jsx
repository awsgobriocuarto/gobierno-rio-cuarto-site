import Link from "next/link";
import SeachResultGroup from "./SeachResultGroup";

export default async function SearchResults({ results, query }) {
  //console.log("results:", results);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!results) {
    return (
      <div>
        <h1>Por favor, ingresa un término de búsqueda.</h1>
      </div>
    );
  }

  const { entries, procedures, posts, areas, categories } = results;

  const hasResults =
    procedures?.data?.length > 0 ||
    categories?.data?.length > 0 ||
    entries?.data?.length > 0 ||
    posts?.data?.length > 0;

  // Lógica para mostrar resultados de búsqueda
  return (
    <div className="search-content">
      <div className="search-header">
        <h4>
          Término de búsqueda: <span>{`"${query}"`}</span>
        </h4>
      </div>

      {!hasResults && (
        <div className="my-5">
          <h5 className="mb-3">
            No se encontraron resultados para tu búsqueda.
          </h5>
          <p className="text-muted">
            Intenta con otros términos o revisa la ortografía.
          </p>
        </div>
      )}

      <div className="search-results">
        {/* Trámites */}
        {procedures?.data?.length > 0 ? (
          <SeachResultGroup
            url="/tramites/"
            title="Trámites"
            results={procedures.data}
          />
        ) : null}

        {categories?.data?.length > 0 ? (
          <SeachResultGroup
            url="/tramites?category="
            title="Categorias de Tramites"
            results={categories.data}
          />
        ) : null}

        {/* Entry */}
        {entries?.data?.length > 0 ? (
          <SeachResultGroup
            url="/seccion/"
            title="Programas y Servicios"
            results={entries.data}
          />
        ) : null}

        {/* Noticias */}
        {posts?.data?.length > 0 ? (
          <SeachResultGroup
            url="/noticias/"
            title="Noticias"
            results={posts.data}
          />
        ) : null}
      </div>

      <div className="alert alert-light border mt-5 p-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="mb-1">¿Necesitas ayuda adicional?</h5>
            <p className="mb-0 text-muted">
              Si no encuentras lo que buscas, puedes consultar nuestra guía
              completa.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link
              href="/contactos"
              className="btn btn-outline-primary shadow-sm"
            >
              Guía de Contactos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
