import React, { Suspense } from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardMaps from "./CardMaps";

export default async function ListMaps({ area }) {
  const maps = await fetchEntries("map", area?.id);

  const generalMapTitles = [
    "Mapa Ciudad de Río Cuarto",
    "Mapa Ciudad de Río Cuarto (ARGENMAP)",
    "Ciudad de rio cuarto",
    "Mapa ciudad de rio cuarto argenmap",
  ];

  const generalMaps = maps.filter((mapa) =>
    generalMapTitles.some(
      (title) => mapa.title.toLowerCase() === title.toLowerCase(),
    ),
  );
  const thematicMaps = maps.filter(
    (mapa) =>
      !generalMapTitles.some(
        (title) => mapa.title.toLowerCase() === title.toLowerCase(),
      ),
  );

  return (
    <section data-read className="map-list">
      {generalMaps.length > 0 && (
        <>
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4 text-primary">Mapas Generales</h2>
            </div>
          </div>
          <div className="row mb-5">
            <Suspense fallback={<div>Cargando...</div>}>
              {generalMaps.map((mapa) => (
                <CardMaps key={mapa.id} map={mapa} />
              ))}
            </Suspense>
          </div>
        </>
      )}

      {thematicMaps.length > 0 && (
        <>
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4 text-primary">Mapas Temáticos</h2>
            </div>
          </div>
          <div className="row">
            <Suspense fallback={<div>Cargando...</div>}>
              {thematicMaps.map((mapa) => (
                <CardMaps key={mapa.id} map={mapa} />
              ))}
            </Suspense>
          </div>
        </>
      )}
    </section>
  );
}
