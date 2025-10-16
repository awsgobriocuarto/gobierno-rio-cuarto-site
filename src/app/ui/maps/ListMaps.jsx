import React, { Suspense } from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardMaps from "./CardMaps";

export default async function ListMaps({ area }) {
  const maps = await fetchEntries("map", area?.id);

  //console.log("MAPAS", maps);

  return (
    <section data-read className="map-list">
      <div className="row">
        <Suspense fallback={<div>Cargando...</div>}>
          {maps.map((mapa) => (
            <CardMaps key={mapa.id} map={mapa} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
