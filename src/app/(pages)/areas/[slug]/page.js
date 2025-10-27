import Link from "next/link";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import FormalitiesAreas from "@/app/ui/areas/FormalitiesAreas";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";
import NewsAreas from "@/app/ui/areas/NewsAreas";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import { createPageMetadata } from "@/app/lib/metadata";
import EntriesAreas from "@/app/ui/areas/EntriesAreas";
import RelatedNews from "@/app/ui/news/RelatedNews";
// import ProgramsAreas from "@/app/ui/areas/ProgramsAreas";
// import OtherAreas from "@/app/ui/areas/OtherAreas";


export async function generateMetadata({ params }) {
  const area = await fetchAreaBySlug(params.slug);
  if (!area) {
    return { title: 'Noticia no encontrada' };
  }
  return createPageMetadata({
    title: area.name,
    description: area.propouse,
  });
}

export default async function AreaDetailPage({ params }) {
  const { slug } = params;

  const area = await fetchAreaBySlug(slug);

  //console.log(area.name);


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
            <EntriesAreas type="program" area={area} title="Programas y Servicios" />
            <EntriesAreas type="other" area={area} title="Otros Servicios" />
          </div>
          <div className="col-md-4">
            <IntitutionalAreas area={area} />
            <RelatedNews
              area={area.id}
              limit={6}
              title="Noticias Relacionadas"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
