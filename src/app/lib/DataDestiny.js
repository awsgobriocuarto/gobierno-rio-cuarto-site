// app/lib/DataDestiny.js
const API_URL = process.env.API_BASE_URL_DESTINO;

export async function fetchDestiny({
  paginate = 9,
  query = null,
  page = null,
} = {}) {
  const apiUrl = `${API_URL}/events?paginate=${paginate}${
    query ? `&query=${query}` : ""
  }${page ? `&page=${page}` : ""}`;

  try {
    const res = await fetch(apiUrl, {
      // ESTA ES LA PARTE CLAVE QUE TE FALTA
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Error al obtener eventos: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error en fetchDestiny: ", error);
    return { data: [] }; // Retorna una estructura segura para evitar errores en el map
  }
}
