/**
 * Genera un objeto de metadatos estándar para una página.
 * @param {object} params - Los parámetros para los metadatos.
 * @param {string} params.title - El título de la página.
 * @param {string} params.description - La descripción de la página.
 * @param {string} [params.imageUrl] - La URL de la imagen para Open Graph (opcional).
 * @param {string} [params.url] - La URL canónica de la página (relativa o absoluta).
 * @param {string} [params.type] - El tipo de contenido Open Graph (por defecto "website").
 * @returns {object} El objeto de metadatos para Next.js.
 */
export function createPageMetadata({ title, description, imageUrl, url, type = "website" }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      ...(url && { url }),
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
    ...(imageUrl && {
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    }),
  };
}