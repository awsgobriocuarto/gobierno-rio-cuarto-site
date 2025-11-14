// app/ui/content/ContentItemCard.jsx

import Link from 'next/link';

// Componente de Presentación (puede ser Server o Client, lo hacemos Server por defecto)
export default function ContentItemCard({
  title,
  summary,
  slug,
  areaName,
  type, // 'post', 'formality', 'program', etc. (Para diferenciar color)
  linkPrefix = '/detalle', // Prefijo de URL base si no viene en el slug
  date,
}) {

  // Definir color basado en el tipo para Bootstrap
  const getTypeClass = (type) => {
    switch (type) {
      case 'post':
        return 'border-primary';
      case 'formality':
        return 'border-success';
      case 'program':
        return 'border-info';
      case 'activity':
        return 'border-danger';
      case 'map':
        return 'border-dark';
      default:
        return 'border-secondary';
    }
  };

  const link = `${linkPrefix}/${slug}`;

  return (
    <div className="mb-4">
      <div className={`card h-100 shadow-sm ${getTypeClass(type)}`}>
        <div className="card-body">
          {/* Badge de Tipo y Área */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className={`badge bg-${getTypeClass(type).replace('border-', '')}`}>
              {type ? type.toUpperCase() : 'CONTENIDO'}
            </span>
            <Link href={link} className="btn btn-sm btn-outline-dark">
              Ver más detalles
            </Link>

          </div>

          <h5 className="card-title text-truncate">{title}</h5>

          {date && (
            <p className="card-text text-muted small mb-2">
              Fecha: {new Date(date).toLocaleDateString('es-AR')}
            </p>
          )}

          {/* Resumen truncado */}
          <p className="card-text text-description">
            {summary.length > 50 ? summary.substring(0, 50) + '...' : summary}
          </p>

        </div>
        <div className="card-footer bg-light border-0">
          {areaName && (
            <p className="text-muted text-truncate mb-0"><small>{areaName}</small></p>
          )}
        </div>
      </div>
    </div>
  );
}