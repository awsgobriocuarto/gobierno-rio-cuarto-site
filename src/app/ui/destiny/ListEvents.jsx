import React, { Suspense } from "react";
import { fetchDestiny } from "@/app/lib/DataDestiny";
import CardEvents from "./CardEvents";

export default async function ListEvents() {
  const { data } = await fetchDestiny({ paginate: 6 });
  //console.log("Eventos:", data);
  return (
    <div className="events events-list" data-read>
      <div className="row justify-content-center">
        <Suspense fallback={<div>Cargando...</div>}>
          {data.map((item) => (
            <CardEvents key={item.id} post={item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
