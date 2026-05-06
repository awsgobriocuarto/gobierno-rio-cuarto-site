import React, { Suspense } from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardMaps from "./CardMaps";

export default async function ListMaps({ area }) {
  const maps = await fetchEntries("map", area?.id);

  const generalMapOrder = [
    "Mapa Ciudad de Río Cuarto",
    "Mapa Ciudad de Río Cuarto (ARGENMAP)",
    "Ciudad de rio cuarto",
    "Mapa ciudad de rio cuarto argenmap",
  ];

  const thematicMapOrder = [
    "Censo 2001",
    "Censo 2008",
    "Censo 2010",
    "Censo 2022",
    "Densidad poblacional",
    "Edificaciones",
    "Espacios verdes y plazas",
    "Presupuesto Participativo (Sectores)",
    "Puntos verdes",
    "Recolección de Residuos",
    "Unidades Geomorfológicas",
    "VECINALES",
  ];

  const sortMaps = (mapsList, orderList) => {
    return [...mapsList].sort((a, b) => {
      const indexA = orderList.findIndex(
        (title) => title.toLowerCase() === a.title.toLowerCase(),
      );
      const indexB = orderList.findIndex(
        (title) => title.toLowerCase() === b.title.toLowerCase(),
      );

      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.title.localeCompare(b.title);
    });
  };

  const generalMaps = sortMaps(
    maps.filter((mapa) =>
      generalMapOrder.some(
        (title) => mapa.title.toLowerCase() === title.toLowerCase(),
      ),
    ),
    generalMapOrder,
  );

  const thematicMaps = sortMaps(
    maps.filter(
      (mapa) =>
        !generalMapOrder.some(
          (title) => mapa.title.toLowerCase() === title.toLowerCase(),
        ),
    ),
    thematicMapOrder,
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
