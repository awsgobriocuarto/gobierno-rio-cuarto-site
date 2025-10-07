import Link from "next/link";

export default function CardNews({ post }) {
  return (
    <div className="col-lg-6 col-xl-4 mb-4 ">
      <div className="card">
        <div className="card-img-top">
          <Link href={`/noticias/${post.slug}`} className="">
            {/* eslint-disable-next-line */}
            <img
              src={post.image}
              alt={post.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="card-body">
          <Link href={`/noticias/${post.slug}`} className="">
            <h3 className="card-title text-primary">{post.title}</h3>
          </Link>
          <p className="card-text">{post.excerpt}</p>
        </div>
        <div className="card-footer border-0 bg-white">
          <span>
            {new Date(post.published_at).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
          <span>
            <Link href={`/noticias/${post.slug}`} className="">
              Ver más
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
