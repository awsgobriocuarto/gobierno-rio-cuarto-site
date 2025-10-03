import React from "react";
import ListFormalitiesBySlug from "../formalities/ListFormalitiesBySlug";

export default function FormalitiesAreas({ area }) {
  if (!area) return "no hay area";

  return (
    <section className="area-formalities">
      <div className="container">
        <ListFormalitiesBySlug area={area} />
      </div>
    </section>
  );
}
