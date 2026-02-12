"use client";
import Link from "next/link";

export default function CardCategories({ category }) {
  return (
    <Link
      href={`/tramites?category=${category.slug}`}
      className="text-decoration-none w-100 h-80 d-block"
    >
      <div className="card area-folder card-category h-100">
        <div className="card-body">
          {/* Icono de la categoría */}
          <div className="category-icon-container">
            <i className={`fas fa-fw ${category.image}`}></i>
          </div>

          <div className="pe-3 overflow-hidden flex-grow-1 ms-2">
            <h5 className="area-folder-title category-title-clamp">
              {category.name}
            </h5>
          </div>

          <div className="arrow-icon">
            <svg
              width="24"
              height="24"
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
