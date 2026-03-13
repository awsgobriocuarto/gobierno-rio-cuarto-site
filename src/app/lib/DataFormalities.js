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

export async function fetchCategories() {
  const res = await fetch(`${API_URL}/categories`, API_OPTIONS);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const categories = await res.json();

  // Reordenar categorías: "Pagos y Deudas" y "Más Consultados" primero
  const priorityNames = ["Pagos y Deudas", "Más Consultados"];

  return categories.sort((a, b) => {
    const aPriority = priorityNames.indexOf(a.name);
    const bPriority = priorityNames.indexOf(b.name);

    if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;

    return 0; // Mantener orden original para los demás
  });
}

export async function fetchFormalities(params = "") {
  const res = await fetch(`${API_URL}/tramites${params}`, API_OPTIONS);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchFormalitiesBySlug(slug = "") {
  const res = await fetch(`${API_URL}/tramites/${slug}`, API_OPTIONS);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
