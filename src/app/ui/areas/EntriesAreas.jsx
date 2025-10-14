// import { fetchOther } from "@/app/lib/DataAreas";
import { fetchEntries } from "@/app/lib/DataEntries";
import EntriesCard from "./EntriesCard";
export default async function EntriesAreas({ type = "", area = "", title = "Titulo del Entry", bg = "primary" }) {

  const entries = await fetchEntries(type, area.id);

  if (!entries || entries.length == 0) {
    return null;
  }

  return (
    <section className="entries-list" data-read>
      <h3 className="mb-4">{title} ({entries.length})</h3>
      <div className="row">
        {entries.map((entry) => (
          <div className="col-md-6" key={entry.id}>
            <EntriesCard entry={entry} bg={bg} />
          </div>
        ))}
      </div>
    </section>
  );
}
