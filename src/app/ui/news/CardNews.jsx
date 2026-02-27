import Link from "next/link";

export default function CardNews({ post }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card card-news h-100">
        <div className="card-img-top">
          <Link href={`/noticias/${post.slug}`} className="">
            {/* eslint-disable-next-line */}
            <img
              key={post.image}
              src={post.image}
              alt={post.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="card-body">
          <Link
            href={`/noticias/${post.slug}`}
            className="text-decoration-none"
          >
            <h3 className="card-title text-dark">{post.title}</h3>
          </Link>
          <p className="card-text text-muted mb-3">{post.excerpt}</p>
        </div>
        <div className="card-footer border-0 bg-white d-flex justify-content-between align-items-center">
          <span
            className="news-date text-success"
            style={{ fontSize: "0.9rem" }}
          >
            {new Date(post.published_at).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
          <span>
            <Link
              href={`/noticias/${post.slug}`}
              className="text-primary text-decoration-none font-weight-bold d-flex align-items-center"
            >
              Ver más{" "}
              <i
                className="fas fa-chevron-right ms-1"
                style={{ fontSize: "0.8rem" }}
              ></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
