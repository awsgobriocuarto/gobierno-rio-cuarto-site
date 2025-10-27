import ShareSocial from "../commons/ShareSocial";

export default function DetailMap({ detailMap }) {
  if (!detailMap) {
    return <div>No se pudo cargar el mapa.</div>;
  }

  const { title, thumbnail, body, links } = detailMap;

  return (
    <article className="map-detail-article">
      <div className="row">
        <div className="col-md-4">
          {" "}
          {/* eslint-disable-next-line */}
          <img
            src={thumbnail ? thumbnail : "/images/no-image.jpg"}
            alt={title}
            className="map-detail--image news-detail--image img-thumbnail"
          />
        </div>
        <div className="col-md-8">
          <h1 className="map-detail--title news-detail--title ">{title}</h1>

          <div
            className="map-detail--body news-detail--body"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {links.map((link, index) => (
            <div key={index} className="map-detail--link news-detail--link">
              <a
                href={link.link}
                target={link.target}
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg text-white mb-3"
              >
                {link.name}
              </a>
            </div>
          ))}
          <hr />
          <ShareSocial />
        </div>
      </div>
    </article>
  );
}
