import React, { Suspense } from "react";
import FormalitiesList from "@/app/ui/formalities/ListFormalities";
import FormalitiesFilters from "@/app/ui/formalities/FilterFormality";
import HeaderSection from "@/app/ui/layout/HeaderSection";
import { fetchFormalities } from "@/app/lib/DataFormalities";

export default async function Formalities({ searchParams }) {


  // Asegúrate de que searchParams sea un objeto plano de strings
  const cleanedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : String(value), // Toma el primer valor si es un array, o conviértelo a string
    ])
  );


  const urlParams = new URLSearchParams(cleanedSearchParams);
  const params = `?${urlParams}`;

  const formalities = await fetchFormalities(params);

  const subtitle = `${formalities.length} trámites encontrados`;


  return (
    <Suspense>
      <main className="formalities formalities-page" data-read>
        <div className="container">
          <HeaderSection title="Tramites" subtitle={subtitle} />
          <div className="row justify-content-center">
            <Suspense fallback={<div>Cargando trámites...</div>}>
              <FormalitiesFilters />
              <FormalitiesList params={params} formalities={formalities} />
            </Suspense>
          </div>
        </div>

      </main>
    </Suspense>
  );
}
