import { Suspense } from "react";
import SearchForm from "@/app/ui/commons/SearchForm";
import SearchResults from "@/app/ui/search/SearchResults";
import { fetchSearch } from "@/app/lib/DataSearch";

export const metadata = {
  title: 'Buscador',
  description: 'Buscador de contenidos del Gobierno de Río Cuarto',
};

export default async function BuscarPage({ searchParams }) {
  const searchQuery = (await searchParams.q) || "";

  const results = await fetchSearch(searchQuery);
  //console.log("searchQuery:", searchQuery);
  return (
    <main>
      <div className="container py-5 text-center">
        <div className="mb-4">
          <SearchForm />
        </div>
        <Suspense
          key={searchQuery}
          fallback={
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Buscando...</span>
              </div>
              <span className="ms-2">Buscando resultados...</span>
            </div>
          }
        >
          <AsyncSearchResults query={searchQuery} />
        </Suspense>
      </div>
    </main>
  );
}
async function AsyncSearchResults({ query }) {
  if (!query) return null;
  const results = await fetchSearch(query);
  return <SearchResults results={results} query={query} />;
}
