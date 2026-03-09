import HeaderSection from "@/app/ui/layout/HeaderSection";
import AreasAccordion from "@/app/ui/areas/AreasAccordion";
import { fetchAreas, fetchAreaBySlug } from "@/app/lib/DataAreas";

export const metadata = {
  title: "Autoridades - Secretaría y áreas municipales",
  description: "Organigrama de autoridades y áreas de la municipalidad.",
};

export default async function AreasPage() {
  // Fetch the basic list of areas
  const basicAreas = await fetchAreas();

  if (!basicAreas || basicAreas.length === 0) {
    return (
      <div className="container mt-5">
        <h1>No se encontraron áreas</h1>
      </div>
    );
  }

  // Fetch full details of each area to get their 'persons' array
  const detailedAreasPromises = basicAreas.map((area) =>
    fetchAreaBySlug(area.slug).catch((err) => {
      console.error(`Error fetching area ${area.slug}:`, err);
      return null;
    }),
  );

  const detailedAreasResponses = await Promise.all(detailedAreasPromises);

  const areasData = detailedAreasResponses.filter(Boolean);

  // Re-sort them by order as ListAreas did, but force "Intendencia" to the top
  areasData.forEach((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
    // Give Intendencia a very low order so it always appears first
    if (area.name.toLowerCase().includes("intendencia")) {
      area.order = -999;
    }
  });
  areasData.sort((a, b) => a.order - b.order);

  return (
    <main>
      <HeaderSection
        title="AUTORIDADES"
        subtitle="Organigrama"
        bgImage="/images/gente1.jpg"
      />
      <section className="container mt-4 mb-5">
        <AreasAccordion areasData={areasData} />
      </section>
    </main>
  );
}
