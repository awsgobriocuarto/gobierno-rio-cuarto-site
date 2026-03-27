"use client";

import { useState } from "react";
import Link from "next/link";

function OrgAreaCard({ area }) {
  // If the area is Intendencia, open it by default
  const [open, setOpen] = useState(area.slug === "intendencia");
  const sortedPersons = [...area.persons].sort((a, b) => a.order - b.order);

  return (
    <div className={`oa-item${open ? " oa-item--open" : ""}`}>
      <button
        className="oa-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="oa-header__left">
          <span className="oa-header__title">{area.name}</span>
          <span className="oa-header__separator" />
        </div>
        <div className="oa-header__right">
          <Link
            href={`/areas/${area.slug}`}
            className="oa-area-link"
            onClick={(e) => e.stopPropagation()}
          >
            Ir al área
          </Link>
          <svg
            className={`oa-header__arrow${open ? " oa-header__arrow--open" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </button>

      {/* Always in DOM, toggled via display to prevent React DOM errors */}
      <div className="oa-body" style={{ display: open ? "block" : "none" }}>
        <div className="oa-staff-grid">
          {sortedPersons.map((p) => (
            <div key={p.id} className="oa-staff-card">
              <img
                src={p.image_url || "/images/no-image.jpg"}
                alt={p.name}
                className="oa-staff-photo"
              />
              <div className="oa-staff-info">
                <span className="oa-staff-name">{p.name}</span>
                <span className="oa-staff-role">{p.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AreasAccordion({ areasData }) {
  if (!areasData || areasData.length === 0) {
    return <p>No hay autoridades disponibles.</p>;
  }

  const validAreas = areasData
    .filter((area) => area.slug !== "emos") // Ocultar EMOS del organigrama (comentar para mostrar)
    .filter((area) => area.persons && area.persons.length > 0);

  return (
    <div className="oa-list">
      {validAreas.map((area, index) => (
        <OrgAreaCard key={area.id || index} area={area} />
      ))}
    </div>
  );
}
