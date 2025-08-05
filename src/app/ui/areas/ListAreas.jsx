// En tu componente listAreas o la página donde lo renderices
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas"; // Ajusta la ruta si es necesario
import { areas } from "@/app/lib/DataAreas"; // Asegúrate de que esta ruta sea correcta
export default function ListAreas() {
  return (
    <section className="section">
      <div className="container">
        <HeaderSection title="Areas de Gobierno" />
        <div className="row justify-content-center">
          {areas.map((area) => (
            <CardAreas key={area.id} post={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
