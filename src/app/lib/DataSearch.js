const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

// console.log("API_BASE_URL:", API_BASE_URL);
// console.log("API_VERSION:", API_VERSION);
// console.log("API_TOKEN:", API_TOKEN);

if (!API_BASE_URL || !API_TOKEN) {
  throw new Error("API_BASE_URL o API_TOKEN no están definidas en el entorno");
}

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;

const API_OPTIONS = {
  headers: {
    Authorization: API_TOKEN,
  },
  cache: "no-store",
};

export async function fetchSearch(query = "") {
  //const res = await fetch(`${API_URL}/tramites?search=${query}`, API_OPTIONS);
  const res = await fetch(
    `${API_URL}/search?search=${query}`,
    API_OPTIONS
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
