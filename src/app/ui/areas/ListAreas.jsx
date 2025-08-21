// En tu componente listAreas o la página donde lo renderices
import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas"; // Ajusta la ruta si es necesario
import { fetchAreas } from "@/app/lib/DataFormalities"; // Importa la función para obtener las áreas
export default async function ListAreas() {
  const areas = await fetchAreas();

  return (
    <section className="section">
      <div className="container">
        <HeaderSection title="Tramites" />
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
