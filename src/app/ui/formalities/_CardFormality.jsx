import Link from "next/link";
import React from "react";

export default function FormalitiesCard({ formality }) {
  const categoryName = formality.categories[0]?.name || "Sin categoría";

  return (
    <div className="card">
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-md-9">
            <h5 className="card-title">{formality.title}</h5>
            <p className="card-text">{formality.summary}</p>
            <dl className="card-detail">
              <dd>
                <span>Responsable:</span> {formality.area.name}
              </dd>
              <dd>
                <span>Categoría:</span> {categoryName}
              </dd>
              <dd>
                <span>Modalidad:</span>{" "}
                {formality.online === 1 ? "Online" : "Presencial"}
              </dd>
            </dl>
          </div>
          <div className="col-md-3">
            <div className="card-cta">
              <Link
                href={`/tramites/${formality.slug}`}
                className="btn btn-dark mb-2"
              >
                Ver más información
              </Link>
              <a
                href={formality.url}
                className={`btn btn-primary text-white ${formality.online !== 1 && "disabled opacity-25"
                  }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar trámite online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
