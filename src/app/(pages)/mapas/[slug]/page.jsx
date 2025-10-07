import { getEntryBySlug } from "@/app/lib/DataEntries";
import DetailMap from "@/app/ui/maps/DetailMap";
export default async function MapDetailPage({ params }) {
  const { slug } = params;

  const detailMap = await getEntryBySlug("map", slug);

  if (!detailMap) {
    return (
      <main className="map-not-found container py-5">
        <h1>Mapa no encontrado </h1>
      </main>
    );
  }

  return (
    <main className="map map-detail" data-read>
      <div className="container py-5">
        <DetailMap detailMap={detailMap} />
      </div>
    </main>
  );
}
