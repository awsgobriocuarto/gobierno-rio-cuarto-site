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

export async function fetchNews({ page = 1, limit = 9, area = "" } = {}) {


  const res = await fetch(`${API_URL}/posts?per_page=${limit}&page=${page}&area=${area}&sort_by=published_at&sort_order=desc&status=published`, API_OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch areas data");
  }
  const data = await res.json();
  return data.data;
}

export async function fetchPosts({ page = 1, limit = 9, area = "" } = {}) {

  console.log(area);

  const res = await fetch(`${API_URL}/posts?per_page=${limit}&page=${page}&area=${area}&sort_by=published_at&sort_order=desc&status=published`, API_OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch areas data");
  }
  const data = await res.json();
  return data.data;
}

export async function getNewsBySlug(slug) {

  const res = await fetch(`${API_URL}/posts/${slug}`, API_OPTIONS);

  if (!res.ok) {
    throw new Error(`Failed to fetch area details for: ${slug}`);
  }
  const data = await res.json();

  return data;
}
