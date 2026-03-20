import { fetchAreas } from "@/app/lib/DataAreas";
import CardAreas from "./CardAreas";

export default async function GovernmentAreas({ isVertical }) {
  const areas = await fetchAreas();

  // Sorting logic to match organigram order
  areas.forEach((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
  });
  areas.sort((a, b) => a.order - b.order);

  return (
    <section
      className={`government-areas ${isVertical ? "py-0 pb-5" : "py-5 bg-white border-top"}`}
    >
      <div className={isVertical ? "" : "container"}>
        <h3
          className={`mb-4 text-uppercase fw-bold ${!isVertical ? "text-center h4" : "h5"}`}
        >
          Áreas del Gobierno
        </h3>
        <div
          className={`row ${isVertical ? "g-2 flex-column" : "g-2 justify-content-center"}`}
        >
          {areas.map((area) => (
            <div
              className={`${isVertical ? "col-12" : "col-6 col-md-4 col-lg-2"} d-flex`}
              key={area.id}
            >
              <CardAreas area={area} isSmall={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
