"use client";
import Link from "next/link";

export default function CardAreas({ area, isSmall }) {
  return (
    <Link
      href={area.href || `/areas/${area.slug}`}
      className="text-decoration-none w-100 h-80 d-block"
    >
      <div
        className={`card area-folder card-area h-100 ${isSmall ? "card-small" : ""}`}
      >
        <div className="card-body">
          <div className="pe-2 overflow-hidden flex-grow-1">
            <h5 className="area-folder-title">{area.name}</h5>
            {!isSmall && <div className="area-folder-separator"></div>}
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
