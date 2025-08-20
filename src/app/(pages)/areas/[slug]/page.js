import Link from "next/link"; // Para el botón de "Volver"
import { areas } from "@/app/lib/DataAreas"; // Importa Areas
import HeroAreas from "@/app/ui/areas/HeroAreas";
import FormalitiesAreas from "@/app/ui/areas/FormalitiesAreas";
import ProgramsAreas from "@/app/ui/areas/ProgramsAreas";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";
import NewsAreas from "@/app/ui/areas/NewsAreas";

export default function AreaDetailPage({ params }) {
  const { slug } = params;

  const area = areas.find((a) => a.slug === slug);

  console.log(area);


  if (!area) {
    return (
      <div className="container mt-5">
        <h1>Área no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="btn btn-primary mt-3">
          Volver a inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="area area-detail">

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <HeroAreas area={area} />
            <FormalitiesAreas area={area} />
            <ProgramsAreas area={area} />
          </div>
          <div className="col-md-4">
            <IntitutionalAreas area={area} />
            <NewsAreas />
          </div>
        </div>
      </div>
    </div>
  );
}

// Opcional: Generación de rutas estáticas (para SSG)
export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}
