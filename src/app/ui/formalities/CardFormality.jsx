import Link from "next/link";

export default function FormalitiesCard({ formality }) {
  return (
    <Link
      href={`/tramites/${formality.slug}`}
      // Agregamos 'h-100' para que el enlace ocupe toda la altura de la columna
      className="text-decoration-none w-100 d-block h-100"
    >
      {/* Agregamos 'h-100' para que la tarjeta ocupe toda la altura del enlace */}
      <div className="card card-formality h-100">
        <div className="card-body">
          {/* Icono de la categoría */}
          <div className="formality-icon-container">
            <i
              className={`fas fa-fw ${formality.categories?.[0]?.image || "fa-file-lines"}`}
            ></i>
          </div>

          <div className="overflow-hidden flex-grow-1">
            {/* Área del trámite */}
            <span className="formality-area-badge">{formality.area.name}</span>
            {/* Título del trámite */}
            <h5 className="formality-title">{formality.title}</h5>
          </div>

          <div className="formality-arrow">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
