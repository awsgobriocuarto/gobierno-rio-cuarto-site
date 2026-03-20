import { fetchEntries } from "@/app/lib/DataEntries";
import CombinedEntriesClient from "./CombinedEntriesClient";

export default async function CombinedEntriesAreas({
  area,
  title = "Programas y Servicios",
  bg = "primary",
}) {
  if (!area || !area.id) return null;

  // Fetch both types of entries concurrently
  const [programsResult, othersResult] = await Promise.all([
    fetchEntries("program", area.id),
    // fetchEntries("other", area.id),
  ]);

  // Ensure they are arrays
  const programs = Array.isArray(programsResult) ? programsResult : [];
  const others = Array.isArray(othersResult) ? othersResult : [];

  // Combine the results
  const combinedEntries = [...programs, ...others];

  if (!combinedEntries || combinedEntries.length === 0) {
    return null;
  }

  return (
    <section className="entries-list mt-5" data-read>
      <h3 className="mb-4">
        {title} <small className="text-muted">({combinedEntries.length})</small>
      </h3>
      <CombinedEntriesClient entries={combinedEntries} bg={bg} />
    </section>
  );
}
