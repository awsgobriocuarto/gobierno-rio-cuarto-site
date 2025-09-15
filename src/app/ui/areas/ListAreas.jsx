import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas";
import { fetchAreas } from "@/app/lib/DataFormalities";

export default async function ListAreas() {
  const areasResponse = await fetchAreas();
  const areas = Array.isArray(areasResponse)
    ? areasResponse
    : areasResponse?.data || [];

  return (
    <section className="section test bg-prueba" data-read>
      <div className="container">
        <HeaderSection title="Áreas" />
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
