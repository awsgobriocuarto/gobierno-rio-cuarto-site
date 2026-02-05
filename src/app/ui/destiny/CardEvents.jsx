export default function CardEvent({ post }) {
  const eventDate = new Date(post.calendars[0].end_date);
  const day = eventDate.getDate();
  const month = eventDate
    .toLocaleDateString("es-AR", { month: "short" })
    .replace(".", "");
  const eventUrl = `https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}`;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 card-event-simple">
        <div className="position-relative">
          <div className="date-sticker">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </div>

          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line */}

            <img
              src={post.image.mediumUrl}
              alt={post.title}
              className="card-img-top"
            />
          </a>
        </div>

        <div className="card-body">
          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="card-title text-primary">{post.title}</h3>
          </a>
          <p className="card-text text-muted small">{post.summary}</p>
        </div>

        <div className="card-footer bg-white border-0">
          <div className="footer-content">
            <span className="event-organization">
              {post.place.organization}
            </span>
            <a
              href={eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-event-more"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
