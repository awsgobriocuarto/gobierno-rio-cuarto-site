import ImageGallery from "../commons/ImageGallery";
import ShareSocial from "../commons/ShareSocial";
import ListIcons from "../icons/ListIcons";
import LinkToBack from "../LinkToBack";
import SidebarRelatedList from "./SidebarRelatedList";
import Buttons from "./Buttons";

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
    links,
    procedures,
    related_entries,
  } = detailEntry;

  if (![1, 3].includes(status)) {
    return "Entrada no encontrada";
  }

  const hasThumbnail = thumbnail && thumbnail.length > 0;

  return (
    <article className="entries-detail">
      <div className="row">
        {hasThumbnail && (
          <div className="col-md-3">
            <div className="entries-detail--img">
              {/* eslint-disable-next-line */}
              <img src={thumbnail} alt="" className="img-thumbnail w-100" />
            </div>
          </div>
        )}
        <div className={hasThumbnail ? "col-md-9" : "col-md-12"}>
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
            <div className="d-block d-md-none mb-4">
              <Buttons links={links} />
            </div>

            <div className="row mt-0">
              <div className="col-12 col-md-10">
                <SidebarRelatedList
                  title="Trámites Relacionados"
                  items={procedures}
                  baseUrl="/tramites"
                  iconClass="fa-file-lines"
                />

                <SidebarRelatedList
                  title="Programas y Servicios Relacionados"
                  items={related_entries}
                  baseUrl="/seccion"
                  iconClass="fa-link"
                />
              </div>
            </div>

            {/* <hr /> */}
            {/* <LinkToBack variant="btn-outline-dark" /> */}
          </div>
        </div>
      </div>
    </article>
  );
}
