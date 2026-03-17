"use client";

import { useState } from "react";
import EntriesCard from "./EntriesCard";

export default function CombinedEntriesClient({ entries, bg }) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 8;

  const visibleEntries = showAll ? entries : entries.slice(0, INITIAL_COUNT);

  return (
    <>
      <div
        className={`row g-3 entries-client-grid ${showAll ? "show-all" : ""}`}
      >
        {visibleEntries.map((entry) => (
          <div className="col-12 col-md-6 entry-item" key={entry.id}>
            <EntriesCard entry={entry} bg={bg} />
          </div>
        ))}
      </div>

      {entries.length > INITIAL_COUNT && (
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Ver menos"
              : `Ver más programas y servicios (${entries.length - INITIAL_COUNT})`}
          </button>
        </div>
      )}
    </>
  );
}
