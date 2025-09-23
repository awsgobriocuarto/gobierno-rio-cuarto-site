import { fetchOther } from "@/app/lib/DataAreas";
import CardOther from "./CardOther";

export default async function OtherAreas({ area }) {
  const others = await fetchOther(area?.id);
  console.log("otheras", others);
  return (
    <section className="section test" data-read>
      <div className="container">
        <h2 className="mb-4">Otros servicios de {area?.name || "el área"}</h2>

        <div className="row g-4">
          {others && others.length > 0 ? (
            others.map((other) => (
              <div className="col-md-6" key={other.id}>
                <CardOther other={other} />
              </div>
            ))
          ) : (
            <div className="col">
              <p className="text-center">
                No hay otros servicios disponibles para esta área.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
