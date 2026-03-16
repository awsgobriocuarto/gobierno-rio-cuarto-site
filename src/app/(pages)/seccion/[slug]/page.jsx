import RelatedNews from "@/app/ui/news/RelatedNews";
import { createPageMetadata } from "@/app/lib/metadata";
import { getEntryBySlug } from "@/app/lib/DataEntries";
import DetailEntries from "@/app/ui/entries/DetailEntries";
import CombinedEntriesAreas from "@/app/ui/areas/CombinedEntriesAreas";
import NotFound from "@/app/ui/commons/NotFound";
import Buttons from "@/app/ui/entries/Buttons";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const entry = await getEntryBySlug(slug);

  if (!entry) {
    return { title: "Entrada no encontrada" };
  }
  return createPageMetadata({
    title: entry.title,
    description: entry.excerpt,
    imageUrl: entry.image,
  });
}

export default async function SeccionDetail({ params }) {
  const { slug } = params;

  const detailEntry = await getEntryBySlug(slug);

  if (!detailEntry) {
    return <NotFound />;
  }

  //console.log(detailEntry);

  return (
    <main className="entries" data-read>
      <div className="container">
        <span className="sr-only">Detalle de la Noticia</span>
        <div className="row">
          <div className="col-md-8">
            <DetailEntries detailEntry={detailEntry} links />

            <CombinedEntriesAreas area={detailEntry.area} />
          </div>

          <div className="col-md-4 position-relative">
            <div
              className="sticky-top py-2"
              style={{ top: "100px", zIndex: 10 }}
            >
              <div className="mb-4 d-none d-md-block">
                <Buttons links={detailEntry.links} />
              </div>
              <RelatedNews title="Noticias Relacionadas" limit={3} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
