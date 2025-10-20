import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas";
import { fetchAreas } from "@/app/lib/DataAreas";

export default async function ListAreas() {
  const areas = await fetchAreas();
  areas.map((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
  });
  areas.sort((a, b) => a.order - b.order);

  return (
    <section className="area area-home" data-read>
      <div className="container">
        <HeaderSection title="Áreas de Gobierno" subtitle="" />
        <div className="row justify-content-center buttons">
          <Suspense fallback={<div>Cargando...</div>}>
            {areas.map((area) => (
              <div className="col-md-4" key={area.id}>
                <CardAreas area={area} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
