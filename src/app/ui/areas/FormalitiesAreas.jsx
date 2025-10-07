import React from "react";
import ListFormalitiesBySlug from "../formalities/ListFormalitiesBySlug";

export default function FormalitiesAreas({ area }) {
  if (!area) return "no hay area";

  return (
    <section className="area-section">
      <ListFormalitiesBySlug area={area} />
    </section>
  );
}
