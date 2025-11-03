import { fetchEntries } from "@/app/lib/DataEntries";
import EntriesCard from "../areas/EntriesCard";

export default async function EntriesList({ type = "", area = "", title = "Titulo del Entry", bg = "primary" }) {

  const entries = await fetchEntries(type, area ? area.slug : "");

  return (
    <section className="" data-read>
      <h3 className="mb-4">{title} ({entries.length})</h3>

      {!entries || entries.length == 0 ? (
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title text-danger">No hay registros</h4>
          </div>
        </div>
      ) : (
        <>
          {
            entries.map((entry) => (
              <div className="card mb-4" key={entry.id}>
                <div className="card-body">
                  <h4 className="card-title">{entry.title}</h4>
                  <h6 className="card-subtitle text-primary mb-3">{entry.area.name}</h6>
                  <p className="card-text">{entry.summary}</p>
                </div>
              </div>
            ))
          }
        </>
      )}
    </section>
  );
}
