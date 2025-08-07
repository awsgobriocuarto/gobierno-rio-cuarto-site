"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardEvents({ post }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-3">
        <Link
          href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}`}
          className="text-decoration-none text-black d-flex flex-column h-100"
          target="_blank"
        >
          <div className="card-img-top-container overflow-hidden rounded-top">
            <img
              src={post.image.mediumUrl}
              alt={post.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="card-body d-flex flex-column p-4 border-top border-primary border-5">
            <h6 className="text-uppercase text-primary fw-bold mb-2">Evento</h6>
            <h5 className="card-title fw-bold text-dark mb-3">{post.title}</h5>
            <p className="card-text text-muted flex-grow-1 mb-3">
              {post.summary}
            </p>
            <div className="mt-auto pt-3 border-top border-light-subtle">
              <span className="text-primary fw-bold">Ver más</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
