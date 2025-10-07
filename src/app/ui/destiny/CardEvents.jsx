import Link from "next/link";

export default function CardNews({ post }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-img-top">
          <a
            href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}&utm_source=web_gobierno&utm_medium=home&utm_campaign=next_events`}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line */}
            <img
              src={post.image.mediumUrl}
              alt={post.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
        <div className="card-body">
          <a
            href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}&utm_source=web_gobierno&utm_medium=home&utm_campaign=next_events`}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="card-title text-primary">{post.title}</h3>
          </a>
          <p className="card-text">{post.summary}</p>
        </div>
        <div className="card-footer border-0 bg-white">
          <span>
            {new Date(post.calendars[0].end_date).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "numeric",
              day: "numeric"
            })}
          </span>
          <span>
            <a
              href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}`}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >Ver más</a>
          </span>
        </div>
      </div>
    </div>
  );
}
