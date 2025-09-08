// DataNews.js
export function fromApiResponseToPosts(apiResponse) {
  return apiResponse.data.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.excerpt,
    image: post.main_picture.medium,
    slug: post.slug,
    createdAt: post.created_at,
    publication_date: post.publication_date,
    body: post.body,
    iframe: post.iframe || "", // Aseguramos que iframe sea una cadena vacía si no existe
  }));
}

export async function fetchNews({ page = 1, limit = 9 } = {}) {
  const apiURL = page
    ? `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}&page=${page}`
    : `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}`;

  try {
    const res = await fetch(apiURL, {
      headers: {
        "Portal-Id": 3,
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const apiResponse = await res.json();
    return fromApiResponseToPosts(apiResponse);
  } catch (error) {
    console.error("Error fetching news: ", error);
    return []; // Retorna un array vacío en caso de error
  }
}

export async function getNewsBySlug(slug) {
  const allNews = await fetchNews({ limit: 5 });
  return allNews.find((news) => news.slug === slug);
}
