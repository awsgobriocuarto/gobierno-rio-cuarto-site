"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchResults from "./SearchResults";

export default function SearchResultClient() {
  const urlParams = new URLSearchParams(cleanedSearchParams);

  //   const searchParams = useSearchParams();
  //   const searchTerm = searchParams.get("q");
  if (!searchTerm) {
    return (
      <div>
        <h1>Por favor, ingresa un término de búsqueda.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Resultados de búsqueda para: {searchTerm} </h1>
      <Suspense fallback={<div>Cargando resultados...</div>}>
        <SearchResults searchTerms={searchTerm} />
      </Suspense>
    </div>
  );
}
