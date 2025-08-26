import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCardBySlug from "./CardFormalityBySlug";

export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const formalities = await fetchFormalities(params);

  return (
    <div>
      <h2>Trámites de {area.name}</h2>
      {formalities.length === 0 ? (
        <p>No hay trámites para esta área.</p>
      ) : (
        <div className="row">
          {formalities.map((formality) => (
            <div className="col-12 col-lg-6 mb-4" key={formality.id}>
              <FormalitiesCardBySlug formality={formality} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
