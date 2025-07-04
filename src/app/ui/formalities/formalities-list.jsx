import React from "react";
import CardFormalities from "./CardFormality";
import { fetchFormalities } from "@/app/lib/DataFormalities";

export default async function FormalitiesList({ params }) {
  const formalities = await fetchFormalities(params);
  console.log("FormalitiesList:", formalities);
  return (
    <div className="formalities-list">
      <div className="container">
        <div className="headers">
          {
            <h2>
              <span>{formalities?.length}</span>{" "}
              {formalities.length == 1 ? "Trámite" : "Trámites"}
            </h2>
          }
        </div>
        <div className="row justify-content-center">
          {formalities.map((formality) => (
            <CardFormalities key={formality.id} formality={formality} />
          ))}
        </div>
      </div>
    </div>
  );
}
