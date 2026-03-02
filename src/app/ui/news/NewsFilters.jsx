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
    <div className="news-filters-container mt-4 mb-5">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-body p-4 p-lg-5">
          <div className="row g-4 align-items-end">
            <div className="col-lg-6 col-md-6">
              <label className="form-label fw-bold text-primary mb-2">
                <i className="fas fa-search me-2"></i>Buscar noticias
              </label>
              <Search placeholder="Título o contenido..." />
            </div>

            <div className="col-lg-6 col-md-6">
              <label className="form-label fw-bold text-primary mb-2">
                <i className="fas fa-layer-group me-2"></i>Filtrar por Área
              </label>
              <Select
                data={sortedAreas}
                collection="area"
                placeholder="Todas las áreas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
