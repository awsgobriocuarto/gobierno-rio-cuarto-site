import Link from "next/link";
import { fetchAreas } from "@/app/lib/DataFormalities";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import FormalitiesAreas from "@/app/ui/areas/FormalitiesAreas";
import ProgramsAreas from "@/app/ui/areas/ProgramsAreas";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";
import NewsAreas from "@/app/ui/areas/NewsAreas";

export async function generateStaticParams() {
  const areasResponse = await fetchAreas();
  const areas = Array.isArray(areasResponse)
    ? areasResponse
    : areasResponse?.data || [];

  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function AreaDetailPage({ params }) {
  const { slug } = params;

  // Asegura que allAreas sea un array
  const allAreasResponse = await fetchAreas();
  const allAreas = Array.isArray(allAreasResponse)
    ? allAreasResponse
    : allAreasResponse?.data || [];

  const area = allAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="container mt-5">
        <h1>Área no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link href="/areas" className="btn btn-primary mt-3">
          Volver a Áreas
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
            <NewsAreas area={area} />
          </div>
        </div>
      </div>
    </div>
  );
}
