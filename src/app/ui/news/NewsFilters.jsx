import React from "react";
import Search from "../formalities/Search";
import Select from "../formalities/Select";

export default function NewsFilters({ areas }) {
  // Aseguramos que las áreas estén ordenadas si es necesario
  const sortedAreas = [...areas]
    .map((area) => {
      if (area.order == -1) {
        return { ...area, order: 9999 };
      }
      return area;
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="news-filters mt-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <h5>Buscar noticias</h5>
          <Search placeholder="Buscar por título o contenido..." />
        </div>
        <div className="col-md-6 mb-3">
          <h5>Filtrar por Área</h5>
          <Select
            data={sortedAreas}
            collection="area"
            placeholder="Todas las áreas"
          />
        </div>
      </div>
    </div>
  );
}
