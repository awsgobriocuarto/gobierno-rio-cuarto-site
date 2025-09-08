import { Suspense } from "react";
import SearchForm from "@/app/ui/commons/SearchForm";
import SearchResults from "@/app/ui/search/SearchResults";
import { fetchSearch } from "@/app/lib/DataSearch";

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

        <Suspense fallback={<div>Cargando resultados...</div>}>
          <SearchResults results={results} />
        </Suspense>
      </div>
    </main>
  );
}
