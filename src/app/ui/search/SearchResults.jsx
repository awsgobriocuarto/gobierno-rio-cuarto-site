// app/ui/commons/SearchResults.jsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');

  if (!searchTerm) {
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
      <h2 className='text-primary fw-bold text-uppercase mt-3 display-4'>{searchTerm}</h2>
      {/* Aquí iría tu lógica para mostrar los resultados */}
    </div>
  );
}