import React, { Suspense } from "react";
import { fetchDestiny } from "@/app/lib/DataDestiny";
import CardEvents from "./CardEvents";
import HeaderSection from "../layout/HeaderSection";

export default async function ListEvents() {
  const { data } = await fetchDestiny({ paginate: 6 });
  //console.log("Eventos:", data);
  return (
    <section id="agenda" className="events events-list" data-read>
      <div className="container">
        <HeaderSection
          title="Disfrutá la ciudad"
          subtitle="Eventos y actividades para vos"
          bgImage="/images/gente2.jpg"
        />

        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {data.map((item) => (
              <CardEvents key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
        <div className="d-flex justify-content-center mt-4 mb-3">
          <a
            href="https://destinoriocuarto.gob.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info rounded-pill px-5 py-2"
          >
            Ver más eventos
          </a>
        </div>
      </div>
    </section>
  );
}
