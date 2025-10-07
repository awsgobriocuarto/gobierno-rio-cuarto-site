// import { fetchOther } from "@/app/lib/DataAreas";
import CardOther from "./CardOther";
import { fetchEntries } from "@/app/lib/DataEntries";
export default async function OtherAreas({ area }) {

  const others = await fetchEntries("other", area?.id);

  if (!others || others.length == 0) {
    return null;
  }

  return (
    <section className="area-section" data-read>
      <h3 className="mb-4">Otros Servicios ({others.length})</h3>
      <div className="row g-4">
        {others.map((other) => (
          <div className="col-md-6" key={other.id}>
            <CardOther other={other} />
          </div>
        ))}
      </div>
    </section>
  );
}
