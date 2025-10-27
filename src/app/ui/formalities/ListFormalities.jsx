// FormalitiesList.jsx (Componente de Servidor)
import React from "react";
import FormalitiesCard from "./CardFormality";

function groupFormalitiesByCategory(formalities) {
  return formalities.reduce((acc, formality) => {
    const categoryObject = formality.categories?.[0];

    let categoryName = "Sin Categoría Asignada";
    if (categoryObject && categoryObject.name) {
      categoryName = categoryObject.name;
    }

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(formality);
    return acc;
  }, {});
}

export default async function FormalitiesList({ formalities }) {
  if (!formalities || formalities.length === 0) {
    return (
      <section className="formalities-list">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-warning">
              No se encontraron trámites.
            </div>
          </div>
        </div>
      </section>
    );
  }

  const groupedFormalities = groupFormalitiesByCategory(formalities);
  const categoryNames = Object.keys(groupedFormalities);

  return (
    <section className="formalities-list mt-3">
      {categoryNames.map((categoryName) => (
        <div key={categoryName} className="category-group mb-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4 text-primary">{categoryName}</h2>
            </div>
          </div>

          <div className="row">
            {groupedFormalities[categoryName].map((formality) => (
              <div key={formality.id} className="col-md-4 mb-4">
                <FormalitiesCard formality={formality} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
