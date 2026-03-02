import ImageGallery from "../commons/ImageGallery";
import ShareSocial from "../commons/ShareSocial";
import ListIcons from "../icons/ListIcons";
import NewsImageCarousel from "./NewsImageCarousel";

const LIST_OF_ICONS = [
  {
    name: "waves",
    color: "lightblue",
    size: "20",
  },
];

export default function DetailNews({ detailNews }) {
  if (!detailNews) {
    return <div>No se pudo cargar la noticia.</div>;
  }

  const {
    title,
    description,
    image,
    published_at,
    body,
    embedded,
    media,
    owner_area,
    excerpt,
    image_gallery,
  } = detailNews;

  return (
    <article>
      <div className="news-detail--pretitle ">
        <ListIcons icons={LIST_OF_ICONS} />
        <span>{new Date(published_at).toLocaleDateString()}</span>
        {`>`}
        <span>{owner_area.name}</span>
      </div>
      <h1 className="news-detail--title">{title}</h1>
      <p className="news-detail--excerpt mt-1 mb-4">{excerpt}</p>
      {/* eslint-disable-next-line */}
      {image && <img src={image} alt={title} className="news-detail--image" />}

      <p className="news-detail--description">{description}</p>

      <ShareSocial />

      <hr />

      <div
        className="news-detail--body"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      {embedded && (
        <div className="news-detail--embedded">
          <h3 className="news-detail--subtitle">Multimedia</h3>
          <div dangerouslySetInnerHTML={{ __html: embedded }} />
        </div>
      )}

      {/* Carousel de imágenes de la noticia (image_gallery[]) */}
      {Array.isArray(image_gallery) && image_gallery.length > 0 && (
        <div className="news-detail--gallery mt-4">
          <h3 className="news-detail--subtitle">Galería de Imágenes</h3>
          <NewsImageCarousel imageGallery={image_gallery} />
        </div>
      )}

      {/* Galería complementaria desde media.gallery si existe */}
      {media && media.gallery && media.gallery.length > 0 && (
        <div className="news-detail--gallery">
          <h3 className="news-detail--subtitle">Más imágenes</h3>
          <ImageGallery photos={media.gallery} />
        </div>
      )}
    </article>
  );
}
