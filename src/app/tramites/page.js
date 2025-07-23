import React, { Suspense } from "react";
import FormalitiesList from "../ui/formalities/ListFormalities";
import FormalitiesFilters from "../ui/formalities/FilterFormality";

export default function Formalities({ searchParams }) {
  console.log("Formalities page loaded with searchParams:", searchParams);

  // Asegúrate de que searchParams sea un objeto plano de strings
  const cleanedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : String(value), // Toma el primer valor si es un array, o conviértelo a string
    ])
  );

  const urlParams = new URLSearchParams(cleanedSearchParams);
  const params = `?${urlParams}`;

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
