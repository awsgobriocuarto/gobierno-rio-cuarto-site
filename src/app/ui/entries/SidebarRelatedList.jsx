import Link from "next/link";
import React from "react";

export default function SidebarRelatedList({
  title,
  items,
  baseUrl,
  iconClass,
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="news-related mb-4">
      <h4 className="news-related--subtitle">{title}</h4>
      <div className="list-group list-group-flush border rounded">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`${baseUrl}/${item.slug}`}
            className="list-group-item list-group-item-action d-flex align-items-center py-3"
          >
            <div className="me-3 text-secondary">
              <i className={`fas fa-fw ${iconClass}`}></i>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h6 className="mb-0 text-truncate text-dark">{item.title}</h6>
            </div>
            <div className="ms-2 text-primary">
              <i className="fas fa-chevron-right fa-sm"></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
