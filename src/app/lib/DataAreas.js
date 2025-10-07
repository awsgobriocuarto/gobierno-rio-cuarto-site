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

export async function fetchAreas() {
  const res = await fetch(`${API_URL}/areas`, API_OPTIONS);
  if (!res.ok) {
    throw new Error("Failed to fetch areas data");
  }
  const data = await res.json();
  return data.data;
}

export async function fetchAreaBySlug(slug) {
  if (!slug) {
    return null;
  }

  const res = await fetch(`${API_URL}/areas/${slug}`, API_OPTIONS);
  if (!res.ok) {
    throw new Error(`Failed to fetch area details for: ${slug}`);
  }
  const data = await res.json();

  return data;
}

// export async function fetchPrograms(areaId = "") {
//   try {
//     const queryParam = areaId
//       ? `?type=program&area_id=${areaId}`
//       : "?type=program";

//     //console.log("Fetching URL:", `${API_URL}/entries${queryParam}`);
//     const res = await fetch(`${API_URL}/entries${queryParam}`, API_OPTIONS);

//     if (!res.ok) {
//       throw new Error(`Error HTTP: ${res.status}`);
//     }

//     const response = await res.json();
//     // console.log("API Response:", response);

//     // Verificamos si tenemos datos y los devolvemos
//     if (response && response.data) {
//       return response.data;
//     }

//     return [];
//   } catch (error) {
//     console.error("Error fetching programs:", error);
//     return [];
//   }
// }

// export async function fetchOther(areaId = "") {
//   try {
//     const queryParam = areaId ? `?type=other&area_id=${areaId}` : "?type=other";

//     // console.log("Fetching URL:", `${API_URL}/entries${queryParam}`);
//     const res = await fetch(`${API_URL}/entries${queryParam}`, API_OPTIONS);

//     if (!res.ok) {
//       throw new Error(`Error HTTP: ${res.status}`);
//     }

//     const response = await res.json();
//     // console.log("API Response:", response);

//     // Verificamos si tenemos datos y los devolvemos
//     if (response && response.data) {
//       return response.data;
//     }

//     return [];
//   } catch (error) {
//     console.error("Error fetching programs:", error);
//     return [];
//   }
// }
