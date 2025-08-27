import Link from "next/link";
import React from "react";

export default function FormalitiesCardBySlug({ formality }) {
  return (
    <div className="card">
      <Link
        href={`/tramites/${formality.slug}`}
        className="card-body text-decoration-none text-dark"
      >
        <p className="card-title mb-0">{formality.title}</p>
      </Link>
    </div>
  );
}
