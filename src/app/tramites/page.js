import React, { Suspense } from "react";
import FormalitiesList from "../ui/formalities/formalities-list";
import FormalitiesFilters from "../ui/formalities/formalities-filters";

export default function Formalities({ searchParams }) {
  const cleanedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : String(value), // Toma el primer valor si es un array, o conviértelo a string
    ])
  );

  const urlParams = new URLSearchParams(cleanedSearchParams);
  const params = `?${urlParams.toString()}`;

  return (
    <Suspense>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Trámites</h2>
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando trámites...</div>}>
            <FormalitiesFilters />
            {/* Suspense is used to handle loading states */}
            <FormalitiesList params={params} />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}
