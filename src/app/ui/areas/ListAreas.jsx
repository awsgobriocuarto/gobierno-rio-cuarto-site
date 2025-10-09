import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas";
import { fetchAreas } from "@/app/lib/DataAreas";

export default async function ListAreas() {
  const areas = await fetchAreas();
  // console.log("AREAS SIN ORDENAR", areas);
  areas.map((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
  });
  areas.sort((a, b) => a.order - b.order);
  // console.log("AREAS ORDENADAS", areas);
  // este codigo creo que es innecesario
  // const areas = Array.isArray(areasResponse)
  //   ? areasResponse
  //   : areasResponse?.data || [];

  // console.log(areas);

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
