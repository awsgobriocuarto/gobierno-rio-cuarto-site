import React, { Suspense } from "react";
import SearchForm from "../commons/SearchForm";

export default function HomeSearch() {
  return (
    <section className="home-search-section pt-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h2 className="text-center mb-4 font-weight-bold">
              ¡Hola! ¿Cómo podemos ayudarte?
            </h2>
            <Suspense>
              <SearchForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
