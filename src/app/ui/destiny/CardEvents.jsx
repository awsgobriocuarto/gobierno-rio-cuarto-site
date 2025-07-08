"use client";
import Image from "next/image";
import Link from "next/link"; // ¡Importa Link de Next.js!

export default function CardEvents({ post }) {
  return (
    <div className="col-md-10 mb-10">
      <div className="card d-flex flex-row">
        {/* Envuelve la card entera o la parte interactiva con Link */}
        <Link
          href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}`}
          className="d-flex flex-row text-decoration-none text-dark"
          target="_blank"
        >
          <div>
            <img
              src={post.image.mediumUrl}
              alt={post.title}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.summary}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
