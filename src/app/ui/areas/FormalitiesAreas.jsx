import React from "react";
import ListFormalitiesBySlug from "../formalities/ListFormalitiesBySlug";

export default function FormalitiesAreas({ area }) {
  if (!area) return "no hay area";

  return (
    <section className="area-formalities">
      <div className="container">
        <h2>FormalitiesAreas</h2>
        <p>{area ? area.title : "no hay area"}</p>
        <ListFormalitiesBySlug area={area} />
      </div>
    </section>
  );
}
