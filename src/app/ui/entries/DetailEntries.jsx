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
    area,
    links
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
              className="entries-detail--body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            {links.length > 0 &&
              <div className="row entries-detail--links">
                {links.map((link, index) => (
                  <div key={index} className="col-md-6">
                    <p>{link.title}</p>
                    <a
                      href={link.link}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="btn btn-info btn-lg text-white"
                    >
                      <span dangerouslySetInnerHTML={{ __html: link.name }} />
                    </a>
                  </div>
                ))}
              </div>
            }

            {/* <hr /> */}
            {/* <LinkToBack variant="btn-outline-dark" /> */}
          </div>
        </div>
      </div>
    </article>
  );
}
