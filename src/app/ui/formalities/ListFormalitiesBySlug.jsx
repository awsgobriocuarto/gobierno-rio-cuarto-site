import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";

export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const formalities = await fetchFormalities(params);

  return (
    <div>
      <h2>Trámites de {area.title}</h2>
      {formalities.length === 0 ? (
        <p>No hay trámites para esta área.</p>
      ) : (
        <div className="row">
          {formalities.map((formality) => (
            <div className="col-12 mb-4" key={formality.id}>
              <FormalitiesCard formality={formality} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
