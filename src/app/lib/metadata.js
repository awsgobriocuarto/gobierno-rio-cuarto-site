/**
 * Genera un objeto de metadatos estándar para una página.
 * @param {object} params - Los parámetros para los metadatos.
 * @param {string} params.title - El título de la página.
 * @param {string} params.description - La descripción de la página.
 * @param {string} [params.imageUrl] - La URL de la imagen para Open Graph (opcional).
 * @returns {object} El objeto de metadatos para Next.js.
 */
export function createPageMetadata({ title, description, imageUrl }) {
  // Si no hay imagen, usa la imagen por defecto definida en el layout.
  const openGraphImage = imageUrl ? [{ url: imageUrl }] : undefined;

  return {
    title, // El `template` del layout se encargará de añadir "| Gobierno Municipal"
    description,
    openGraph: {
      title,
      description,
      images: openGraphImage,
    },
  };
}