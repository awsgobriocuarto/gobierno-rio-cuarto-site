// import { fetchOther } from "@/app/lib/DataAreas";
import CardOther from "./CardOther";
import { fetchEntries } from "@/app/lib/DataEntries";
export default async function OtherAreas({ area }) {
  const others = await fetchEntries("other", area?.id);
  //console.log("otheras", others);
  if (!others || others.length == 0) {
    return null;
  }
  return (
    <section className="section test" data-read>
      <div className="container">
        <h2 className="mb-4">Otros servicios de {area?.name || "el área"}</h2>
        <div className="row g-4">
          {others.map((other) => (
            <div className="col-md-6" key={other.id}>
              <CardOther other={other} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
