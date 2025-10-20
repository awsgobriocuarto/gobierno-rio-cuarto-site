import ImageGallery from "../commons/ImageGallery";
import ShareSocial from "../commons/ShareSocial";
import ListIcons from "../icons/ListIcons";
import LinkToBack from "../LinkToBack";

const LIST_OF_ICONS = [
  {
    name: "waves",
    color: "lightblue",
    size: "20",
  },
];

export default function DetailEntries({ detailEntry }) {
  if (!detailEntry) {
    return <div>No se pudo cargar la noticia.</div>;
  }

  const {
    id,
    type,
    pretitle,
    title,
    thumbnail,
    summary,
    body,
    status,
    area
  } = detailEntry;

  if (status != 1) {
    return 'Entrada no encontrada';
  }

  const hasThumbnail = thumbnail && thumbnail.length > 0;

  return (
    <article className="entries-detail">
      <div className="row">
        <div className="col-md-3">
          <div className="entries-detail--img">

            {/* eslint-disable-next-line */}
            <img src={thumbnail ? thumbnail : '/images/no-image.jpg'} alt="" className="img-thumbnail w-100" />

          </div>
        </div>
        <div className="col-md-9">
          <div className="entries-detail--content">
            <div className="entries-detail--pretitle">
              <ListIcons icons={LIST_OF_ICONS} />
              <span className="entries-detail--area">{area.name}</span>
            </div>
            <h1 className="entries-detail--title">{title}</h1>
            <p className="entries-detail--subtitle">{summary}</p>
            <div
              className="news-detail--body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            <LinkToBack variant="btn-outline-dark" />
          </div>
        </div>
      </div>
    </article>
  );
}
