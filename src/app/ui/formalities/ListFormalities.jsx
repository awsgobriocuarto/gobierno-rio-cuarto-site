import React from "react";
import FormalitiesCard from "./CardFormality";

export default async function FormalitiesList({ formalities }) {

  if (!formalities || formalities.length === 0) {
    return (<section className="formalities-list">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-warning">
            No se encontraron trámites.
          </div>
        </div>
      </div>
    </section>)
  }

  return (
    <section className="formalities-list">
      <div className="row">
        {formalities.map((formality) => (
          <div key={formality.id} className="col-md-4">
            <FormalitiesCard formality={formality} />
          </div>
        ))}
      </div>
    </section>
  );
}
