import React, { Suspense } from "react";
import { fetchDestiny } from "@/app/lib/DataDestiny";
import CardEvents from "./CardEvents";
import HeaderSection from "../layout/HeaderSection";

export default async function ListEvents() {
  const { data } = await fetchDestiny({ paginate: 6 });
  //console.log("Eventos:", data);
  return (
    <section className="section   " data-read>
      <div className="container events events-list" data-read>
        <HeaderSection title="Últimas Noticias" />

        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {data.map((item) => (
              <CardEvents key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
