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
    <section className="area area-home bg-gray" data-read>
      <div className="container">
        <HeaderSection
          title="GESTIONAMOS PARA VOS"
          subtitle="Secretarías y áreas municipales"
          bgImage="/images/gente1.jpg"
        />
        <div className="row justify-content-center buttons-areas gx-4 gy-1">
          <Suspense fallback={<div>Cargando...</div>}>
            {areas.map((area) => (
              <div className="col-12 col-sm-6 col-lg-4" key={area.id}>
                <CardAreas area={area} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
