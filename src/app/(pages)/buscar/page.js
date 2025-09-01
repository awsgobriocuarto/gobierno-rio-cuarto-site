import { Suspense } from 'react';
import SearchForm from '@/app/ui/commons/SearchForm';
import SearchResults from '@/app/ui/search/SearchResults';

export default function BuscarPage() {
  return (
    <main>
      <div className="container py-5 text-center">
        <div className="mb-4">
          <SearchForm />
        </div>

        <Suspense fallback={<div>Cargando resultados...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  );
}