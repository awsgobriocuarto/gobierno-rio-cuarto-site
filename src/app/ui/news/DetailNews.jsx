
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
      <h1 className='news-detail--title'>{title}</h1>
      {/* Muestra la imagen principal si existe */}
      {image && <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />}

      <p><strong>Categoría:</strong> {category_name}</p>
      <p><strong>Fecha de Publicación:</strong> {publication_date}</p>
      <p><strong>Descripción:</strong> {description}</p>

      {/* Renderiza el cuerpo de la noticia como HTML */}
      <div dangerouslySetInnerHTML={{ __html: body }} />

      {/* Muestra el iframe si existe */}
      {iframe && (
        <div>
          <h3>Video</h3>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </div>
      )}

      {/* Renderiza la galería si existe y tiene elementos */}
      {media && media.gallery && media.gallery.length > 0 && (
        <div className="news-gallery">
          <h3>Galería de Imágenes</h3>
          {media.gallery.map((img, index) => (
            <img key={index} src={img.medium} alt={`${title} - imagen ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
          ))}
        </div>
      )}
    </article>
  );
}