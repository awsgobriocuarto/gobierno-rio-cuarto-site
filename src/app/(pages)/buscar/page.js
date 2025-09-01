// app/buscar/page.jsx
"use client";

import Search from '@/app/ui/commons/SearchForm';
import { useSearchParams } from 'next/navigation';

export default function BuscarPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');

  return (
    <main>
      <div className="container py-5 text-center">
        <div className="mb-4">
          <Search />
        </div>

        {!searchTerm ? (
          <div>
            <h1>Por favor, ingresa un término de búsqueda.</h1>
          </div>
        ) : (

          <div>
            <h1>Resultados de búsqueda para:</h1>
            <h2 className='text-primary fw-bold text-uppercase mt-3 display-4'>{searchTerm}</h2>
            {/* Aquí iría tu lógica para mostrar los resultados */}
          </div>
        )}
      </div>
    </main>
  );
}