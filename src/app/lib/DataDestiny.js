// app/lib/DataDestiny.js
const API_URL = process.env.API_BASE_URL_DESTINO;

export async function fetchDestiny() {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Error al obtener datos de destino: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error en fetchDestiny: ", error);
    return { featured_events: [], suggested_experiences: [], relevant_activities: [] };
  }
}
