import React, { Suspense } from "react";
import SearchForm from "../commons/SearchForm";
import HeaderSection from "../layout/HeaderSection";

const QUICK_SEARCHES = [
  "Carnet",
  "Cedulón",
  "Habilitación",
  "Turnos",
  "Multas",
];

export default function HomeSearch() {
  return (
    <section className="home-search-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <HeaderSection
              className="home-search-header"
              title="¡Hola! ¿Cómo podemos ayudarte?"
              subtitle="Usa palabras claves: Carnet, Cedulón, Habilitación, Turnos, Multas..."
            />
            <Suspense>
              <SearchForm />
            </Suspense>
            <div className="home-search-tags">
              <span className="home-search-tags-label">Frecuentes:</span>
              {QUICK_SEARCHES.map((q) => (
                <a
                  key={q}
                  href={`/buscar?q=${encodeURIComponent(q)}`}
                  className="home-search-tag"
                >
                  {q}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
