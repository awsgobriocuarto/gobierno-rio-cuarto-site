const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

if (!API_BASE_URL || !API_TOKEN) {
  throw new Error("API_BASE_URL o API_TOKEN no están definidas en el entorno");
}

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;

const API_OPTIONS = {
  headers: {
    Authorization: API_TOKEN,
  },
  next: {
    revalidate: 60,
  },
};

export async function fetchEntries(type, area = "", limit = 100) {
  if (!type) {
    console.error("fetchEntries requiere un 'type'.");
    return [];
  }

  try {
    const queryParams = new URLSearchParams({ type, per_page: limit });
    if (area) queryParams.append("area", area);

    const url = `${API_URL}/entries?${queryParams.toString()}`;

    // Solo pasa API_OPTIONS, ya tiene el revalidate: 60
    const res = await fetch(url, API_OPTIONS);

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status} en fetchEntries`);
    }

    const response = await res.json();
    return response?.data || [];
  } catch (error) {
    console.error(`Error al obtener entries:`, error);
    return [];
  }
}

export async function getEntryBySlug(slug) {
  if (!slug) return null;

  try {
    const url = `${API_URL}/entries/${slug}`;

    const res = await fetch(url, API_OPTIONS);

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Error HTTP: ${res.status} en getEntryBySlug`);
    }

    const response = await res.json();
    return response || null;
  } catch (error) {
    // Corregido: eliminada referencia a 'type' que no existe aquí
    console.error(`Error al obtener entry por slug (${slug}):`, error);
    return null;
  }
}
