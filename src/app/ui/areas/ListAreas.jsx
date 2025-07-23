// En tu componente listAreas o la página donde lo renderices
import CardAreas from "./CardAreas"; // Ajusta la ruta si es necesario
import { areas } from "@/app/lib/DataAreas"; // Asegúrate de que esta ruta sea correcta
export default function ListAreas() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {areas.map((area) => (
          <CardAreas key={area.id} post={area} />
        ))}
      </div>
    </div>
  );
}
