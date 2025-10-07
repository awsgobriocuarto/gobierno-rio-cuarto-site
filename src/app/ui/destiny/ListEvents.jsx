import React, { Suspense } from "react";
import { fetchDestiny } from "@/app/lib/DataDestiny";
import CardEvents from "./CardEvents";
import HeaderSection from "../layout/HeaderSection";

export default async function ListEvents() {
  const { data } = await fetchDestiny({ paginate: 6 });
  console.log("Eventos:", data);
  return (
    <section className="events events-list" data-read>
      <div className="container">

        <HeaderSection title="Eventos" subtitle="Destino Río Cuarto" />


        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {data.map((item) => (
              <CardEvents key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
        <a href="https://destinoriocuarto.gob.ar" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ver más</a>
      </div>
    </section>
  );
}
