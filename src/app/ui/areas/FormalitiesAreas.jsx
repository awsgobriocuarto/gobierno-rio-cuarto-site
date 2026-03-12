import React from "react";
import ListFormalitiesBySlug from "../formalities/ListFormalitiesBySlug";
import { fetchFormalities } from "@/app/lib/DataFormalities";

export default async function FormalitiesAreas({ area }) {
  if (!area) return "no hay area";

  const params = `?area=${area.slug}`;
  const allFormalities = await fetchFormalities(params);

  if (!allFormalities || allFormalities.length === 0) {
    return null;
  }

  return (
    <section className="area-section">
      <ListFormalitiesBySlug area={area} allFormalities={allFormalities} />
    </section>
  );
}
