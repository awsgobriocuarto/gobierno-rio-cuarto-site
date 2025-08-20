import Image from "next/image";
import Link from "next/link";

export default function CardNews({ post }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-3">
        <Link
          href={`/noticias/${post.slug}`}
          className="text-decoration-none text-black d-flex flex-column h-100"
        >
          <div className="card-img-top-container overflow-hidden rounded-top m-0">
            <img
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="card-body d-flex flex-column p-4 border-top border-primary border-5">
            <h5 className="card-title fw-bold text-dark mb-3">{post.title}</h5>
            <p className="card-text text-muted flex-grow-1 mb-3">
              {post.description}
            </p>
            <div className="text-muted mt-3">
              Publicado el:{" "}
              {new Date(post.publication_date).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="mt-auto pt-3 border-top border-light-subtle">
              <span className="text-primary fw-bold">Ver más</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
