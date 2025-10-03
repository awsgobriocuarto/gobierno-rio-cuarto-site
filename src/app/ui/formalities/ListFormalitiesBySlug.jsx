import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";
import Link from "next/link";


export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const allFormalities = await fetchFormalities(params);
  const formalities = allFormalities.slice(0, 6);

  return (
    <div>
      <h3 className="mb-3">Trámites ({allFormalities.length})</h3>
      {formalities.length === 0 ? (
        <p>No hay trámites para esta área.</p>
      ) : (

        <>
          <div className="row formalities-list">
            {formalities.map((formality) => (
              <div className="col-12 col-lg-6" key={formality.id}>
                <FormalitiesCard formality={formality} />
              </div>
            ))}
          </div>
          {allFormalities.length > 6 && (
            <Link href={`/tramites?area=${area.slug}`} className="btn btn-info text-white">Ver mas</Link>
          )}

        </>


      )}
    </div>
  );
}
