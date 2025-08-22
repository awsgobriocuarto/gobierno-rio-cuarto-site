<<<<<<< HEAD
import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas";
import { fetchAreas } from "@/app/lib/DataFormalities";

export default async function ListAreas() {
  const areasResponse = await fetchAreas();
  const areas = Array.isArray(areasResponse)
    ? areasResponse
    : areasResponse?.data || [];
=======
// En tu componente listAreas o la página donde lo renderices
import { Suspense } from "react";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas"; // Ajusta la ruta si es necesario
import { fetchAreas } from "@/app/lib/DataFormalities"; // Importa la función para obtener las áreas
export default async function ListAreas() {
  const areas = await fetchAreas();
>>>>>>> 86a554de9f4ec2dbb8a5143e63338958a823a4f2

  return (
    <section className="section">
      <div className="container">
<<<<<<< HEAD
        <HeaderSection title="Areas" />
=======
        <HeaderSection title="Tramites" />
>>>>>>> 86a554de9f4ec2dbb8a5143e63338958a823a4f2
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
