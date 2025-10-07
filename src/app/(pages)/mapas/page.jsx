import React, { Suspense } from "react";
import ListMaps from "@/app/ui/maps/ListMaps";
import { fetchEntries } from "@/app/lib/DataEntries";
import HeaderSection from "@/app/ui/layout/HeaderSection";

export const metadata = {
  title: "Mapas",
  description: "Mapas del Gobierno de Río Cuarto",
};

export default async function Mapas() {
  const maps = await fetchEntries("map");
  const mapsTotal = maps.length;

  return (
    <main className="map map-page" data-read>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-md-6">
              <HeaderSection
                title="Mapas"
                subtitle={`Cantidad de mapas ${mapsTotal}`}
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando mapas</div>}>
            {mapsTotal === 0 ? (
              <div className="map-not-found news-not-found">
                <div className="card border-primary">
                  <div className="card-body py-4">
                    <p>No hay mapas disponibles.</p>
                  </div>
                </div>
              </div>
            ) : (
              <ListMaps />
            )}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
