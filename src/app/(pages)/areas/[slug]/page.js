import Link from "next/link";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import FormalitiesAreas from "@/app/ui/areas/FormalitiesAreas";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import { createPageMetadata } from "@/app/lib/metadata";
import CombinedEntriesAreas from "@/app/ui/areas/CombinedEntriesAreas";
import RelatedNews from "@/app/ui/news/RelatedNews";
import AreaDetail from "@/app/ui/formality/AreaDetail";
import ManagementPillars from "@/app/ui/areas/ManagementPillars";
import GovernmentAreas from "@/app/ui/areas/GovernmentAreas";

import { parseAreaPropouse } from "@/app/lib/areaUtils";

export async function generateMetadata({ params }) {
  const area = await fetchAreaBySlug(params.slug);
  if (!area) {
    return { title: "Noticia no encontrada" };
  }
  return createPageMetadata({
    title: area.name,
    description: area.propouse,
  });
}

export default async function AreaDetailPage({ params }) {
  const { slug } = params;

  const area = await fetchAreaBySlug(slug);

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

  // Logic for parsing content if it's "intendencia"
  let displayPropouse = area.propouse;
  let pillarSections = null;

  if (slug === "intendencia") {
    const parsed = parseAreaPropouse(area.propouse);
    displayPropouse = parsed.intro;
    pillarSections = parsed.sections;
  }

  return (
    <div className="area area-detail">
      <div className="container">
        <div className="row area-mobile-flex">
          {slug === "intendencia" ? (
            <>
              {/* Column 1: Institutional Info (Left) - Compact Size */}
              <div className="col-md-3 area-column-right sticky-sidebar">
                <div className="area-order-2">
                  <IntitutionalAreas area={area} isSidebar={true} />
                </div>
                <div className="col-md-12 mb-4 area-order-6">
                  <AreaDetail area={area} />
                </div>
              </div>

              {/* Column 2: Main Content (Middle) - Restored width */}
              <div className="col-md-6 area-column-left">
                <div className="area-order-1">
                  <HeroAreas area={area} propouseOverride={displayPropouse} />
                </div>
                <div className="area-order-3 mb-4">
                  <ManagementPillars
                    sections={pillarSections}
                    intro={displayPropouse}
                  />
                </div>
                <div className="area-order-4">
                  <CombinedEntriesAreas area={area} />
                </div>
                <div className="area-order-5">
                  <FormalitiesAreas area={area} />
                </div>
              </div>

              {/* Column 3: Government Areas (Right) */}
              <div className="col-md-3 area-column-right">
                <div className="area-order-7">
                  <GovernmentAreas isVertical={true} excludeSlug={slug} />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Default Layout: Content on Left, Photo on Right */}
              <div className="col-md-8 area-column-left">
                <div className="area-order-1">
                  <HeroAreas area={area} propouseOverride={displayPropouse} />
                </div>
                <div className="area-order-4">
                  <CombinedEntriesAreas area={area} />
                </div>
                <div className="area-order-5">
                  <FormalitiesAreas area={area} />
                </div>
              </div>
              <div className="col-md-4 area-column-right">
                <div className="area-order-3">
                  <IntitutionalAreas area={area} />
                </div>
                <div className="col-md-12 mb-4 area-order-2">
                  <AreaDetail area={area} />
                </div>
                <div className="area-order-6">
                  <RelatedNews
                    area={area.id}
                    limit={6}
                    title="Noticias Relacionadas"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
