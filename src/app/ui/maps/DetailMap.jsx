import ShareSocial from "../commons/ShareSocial";
import ListIcons from "../icons/ListIcons";

const LIST_OF_ICONS = [
  {
    name: "waves",
    color: "lightblue",
    size: "20",
  },
];

export default function DetailMap({ detailMap }) {
  if (!detailMap) {
    return <div>No se pudo cargar el mapa.</div>;
  }

  const { title, summary, thumbnail, body } = detailMap;

  return (
    <article className="map-detail-article">
      <div className="map-detail--pretitle news-detail--pretitle">
        <ListIcons icons={LIST_OF_ICONS} />
        <span className="map-detail--type">MAPA</span>
      </div>

      <h1 className="map-detail--title news-detail--title">{title}</h1>

      {/* eslint-disable-next-line */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="map-detail--image news-detail--image"
        />
      )}

      <p className="map-detail--summary news-detail--description">{summary}</p>

      <ShareSocial />

      <hr />

      <div
        className="map-detail--body news-detail--body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </article>
  );
}
