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
};

export async function fetchEntries(type, areaId = "") {
  if (!type) {
    console.error("fetchEntries requiere un 'type'.");
    return [];
  }

  try {
    const queryParams = new URLSearchParams({ type });
    // console.log("query", queryParams);
    if (areaId) {
      queryParams.append("area_id", areaId);
    }

    const url = `${API_URL}/entries?${queryParams.toString()}`;
    // console.log("Fetching URL:", url);
    const res = await fetch(url, {
      ...API_OPTIONS,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Error HTTP: ${res.status} al obtener entradas de tipo '${type}'.`
      );
    }

    const response = await res.json();

    return response?.data || [];
  } catch (error) {
    console.error(`Error al obtener entries de tipo '${type}':`, error);

    return [];
  }
}

export async function getEntryBySlug(type, slug) {
  if (!type || !slug) {
    console.error("getEntryBySlug requiere 'type' y 'slug'.");
    return null;
  }

  try {
    const url = `${API_URL}/entries/${slug}`;

    const options = {
      ...API_OPTIONS,
      cache: "no-store",
      next: { revalidate: 0 },
    };

    console.log("Fetching SLUG URL (CORREGIDO):", url);

    const res = await fetch(url, options);

    if (!res.ok) {
      if (res.status === 404) return null;

      throw new Error(
        `Error HTTP: ${res.status} al obtener tipo '${type}' con slug: ${slug}`
      );
    }

    const response = await res.json();

    return response || null;
  } catch (error) {
    console.error(
      `Error al obtener entry de tipo '${type}' por slug (${slug}):`,
      error
    );
    return null;
  }
}
