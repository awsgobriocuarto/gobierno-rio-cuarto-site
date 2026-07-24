import Link from "next/link";

export const EXTERNAL_LINK_CATEGORY = "Pagos y Deudas";

export default function FormalitiesCard({ formality }) {
  const isPagosYDeudas = formality.categories?.some(
    (cat) => cat.name === EXTERNAL_LINK_CATEGORY
  );
  const hasExternalUrl = formality.online == 1 && formality.url;
  const directLink = isPagosYDeudas && hasExternalUrl;

  const cardContent = (
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
          <span className="formality-area-badge">
            {formality.area?.name || "Sin área"}
          </span>
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
  );

  if (directLink) {
    return (
      <a
        href={formality.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none w-100 d-block h-100"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={`/tramites/${formality.slug}`}
      className="text-decoration-none w-100 d-block h-100"
    >
      {cardContent}
    </Link>
  );
}
