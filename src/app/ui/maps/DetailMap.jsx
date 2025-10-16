import ShareSocial from "../commons/ShareSocial";

export default function DetailMap({ detailMap }) {
  if (!detailMap) {
    return <div>No se pudo cargar el mapa.</div>;
  }

  const { title, thumbnail, body } = detailMap;

  return (
    <article className="map-detail-article">
      <h1 className="map-detail--title news-detail--title">{title}</h1>

      {/* eslint-disable-next-line */}
      <img
        src={thumbnail ? thumbnail : '/images/no-image.jpg'}
        alt={title}
        className="map-detail--image news-detail--image"
      />

      <ShareSocial />

      <hr />

      <div
        className="map-detail--body news-detail--body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </article>
  );
}
