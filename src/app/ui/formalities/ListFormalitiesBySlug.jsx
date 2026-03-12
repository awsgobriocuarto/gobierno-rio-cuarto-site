import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";
import Link from "next/link";

export default async function ListFormalitiesBySlug({ area, allFormalities }) {
  if (!area) return null;

  if (!allFormalities) {
    const params = `?area=${area.slug}`;
    allFormalities = await fetchFormalities(params);
  }

  if (!allFormalities || allFormalities.length === 0) {
    return null;
  }

  const formalities = allFormalities.slice(0, 12);

  return (
    <div>
      <h3 className="text-dark">
        Trámites Digitales <small>({allFormalities.length})</small>
      </h3>
      <div className="row formalities-list">
        {formalities.map((formality) => (
          <div className="col-12 col-md-6 mb-4" key={formality.id}>
            <FormalitiesCard formality={formality} />
          </div>
        ))}
      </div>
      {allFormalities.length > 6 && (
        <Link
          href={`/tramites?area=${area.slug}`}
          className="btn btn-dark text-white"
        >
          Ver más trámites
        </Link>
      )}
    </div>
  );
}
