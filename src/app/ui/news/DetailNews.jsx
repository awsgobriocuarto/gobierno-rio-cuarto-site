import ImageGallery from "../commons/ImageGallery";
import ShareSocial from "../commons/ShareSocial";
import ListIcons from "../icons/ListIcons";

const LIST_OF_ICONS = [
  {
    name: 'waves',
    color: 'lightblue',
    size: '20'
  }
]

export default function DetailNews({ detailNews }) {
  // Asegúrate de que detailNews no sea null para evitar errores
  if (!detailNews) {
    return <div>No se pudo cargar la noticia.</div>;
  }

  const {
    title,
    description,
    image,
    publication_date,
    body,
    iframe,
    category_name,
    media,
  } = detailNews;

  return (
    <article>
      <div className="news-detail--pretitle ">
        <ListIcons icons={LIST_OF_ICONS} />
        <span className="news-detail--category">{category_name}</span>

        <span>{new Date(publication_date).toLocaleDateString(
          "es-AR",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}
        </span>
      </div>
      <h1 className='news-detail--title'>{title}</h1>
      {/* eslint-disable-next-line */}
      {image && <img src={image} alt={title} className="news-detail--image" />}

      <p className="news-detail--description">
        {description}
      </p>

      <ShareSocial />

      <hr />

      {/* Renderiza el cuerpo de la noticia como HTML */}
      <div className="news-detail--body" dangerouslySetInnerHTML={{ __html: body }} />

      {/* Muestra el iframe si existe */}
      {iframe && (
        <div className="news-detail--iframe">
          <h3 className="news-detail--subtitle">Video</h3>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </div>
      )}

      {/* Renderiza la galería si existe y tiene elementos */}
      {media && media.gallery && media.gallery.length > 0 && (
        <div className="news-detail--gallery">
          <h3 className="news-detail--subtitle">Galería de Imágenes</h3>
          <ImageGallery photos={media.gallery} />
        </div>
      )}
    </article>
  );
}