export default function CardEvent({ post }) {
  const calendar = post.calendars?.[0];
  const eventDate = calendar ? new Date(calendar.start_date.slice(0, 10) + "T00:00:00") : null;
  const day = eventDate?.getDate();
  const month = eventDate
    ?.toLocaleDateString("default", { month: "short" })
    .replace(".", "");
  const canonicalPath = post.canonical_url.replace("/propuestas/", "/experiencias/");
  const eventUrl = `https://www.destinoriocuarto.gob.ar${canonicalPath}`;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 card-event-simple">
        <div className="position-relative">
          {eventDate && (
            <div className="date-sticker">
              <span className="day">{day}</span>
              <span className="month">{month}</span>
            </div>
          )}

          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line */}

            <img
              src={post.cover.medium}
              alt={post.title}
              className="card-img-top"
            />
          </a>
        </div>

        <div className="card-body">
          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="card-title text-primary">{post.title}</h3>
          </a>
          <p className="card-text text-muted small">{post.excerpt}</p>
        </div>

        <div className="card-footer bg-white border-0">
          <div className="footer-content">
            <span className="event-organization">
              {post.organization?.name || post.categories?.[0]?.name || ""}
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
