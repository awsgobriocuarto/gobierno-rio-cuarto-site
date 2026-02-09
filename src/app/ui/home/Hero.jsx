import React, { Suspense } from "react";
import Slides from "./Slides";
import SearchForm from "../commons/SearchForm";
import ListIcons from "../icons/ListIcons"; // agregado

const HERO_ICONS = [
  { name: "circles", color: "white", size: "24" },
  { name: "squares", color: "white", size: "24" },
  { name: "waves", color: "white", size: "24" },
];

export default function Hero() {
  return (
    <section className="hero" data-read>
      <div className="hero-slides">
        <Slides />
      </div>

      {/* overlay de íconos fuera de .hero-slides para evitar heredar opacity */}
      <div className="hero-slides-icons" aria-hidden="true">
        <ListIcons icons={HERO_ICONS} />
      </div>

      <div className="hero-search">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <h1 className="hero-title">¡Hola! ¿Cómo podemos ayudarte?</h1>
              <Suspense>
                <SearchForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
