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
    <section className="section">
      <div className="container">
        <HeaderSection title="Areas" />
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {areas.map((area) => (
              <CardAreas key={area.id} area={area} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
