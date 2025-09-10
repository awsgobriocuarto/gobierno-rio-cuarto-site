export function fromApiResponseToPosts(apiResponse) {
  let posts = [];

  // Check if the API response contains a top-level `data` key.
  if (apiResponse && 'data' in apiResponse) {
    const apiData = apiResponse.data;

    // Case 1: `data` is an array (for a list of news).
    if (Array.isArray(apiData)) {
      posts = apiData;
    }
    // Case 2: `data` is a single object (for a single news item).
    else if (typeof apiData === 'object' && apiData !== null) {
      posts = [apiData];
    }
  }

  // If no data was found or the response was not as expected, return an empty array.
  if (posts.length === 0) {
    return [];
  }

  // Map and transform the data to a consistent format.
  return posts.map((post) => {
    // The image can be in `main_picture` or `media.main_picture`.
    const mainPicture = post.main_picture || (post.media && post.media.main_picture);

    return {
      id: post.id,
      title: post.title,
      description: post.excerpt,
      image: mainPicture ? mainPicture.medium : null,
      slug: post.slug,
      createdAt: post.created_at,
      publication_date: post.publication_date,
      body: post.body,
      iframe: post.iframe || "",
      media: post.media || {},
      category_name: post.category_name,
      category_slug: post.category_slug,
      category_id: post.category_id,
    };
  });
}

export async function fetchNews({ page = 1, limit = 9 } = {}) {
  const apiURL = page
    ? `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}&page=${page}`
    : `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}`;

  try {
    const res = await fetch(apiURL, {
      headers: { "Portal-Id": 3 },
      next: { revalidate: 600 }
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const apiResponse = await res.json();
    return fromApiResponseToPosts(apiResponse);
  } catch (error) {
    console.error("Error fetching news: ", error);
    return [];
  }
}

export async function getNewsById(id) {
  const apiURL = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts/${id}`;

  try {
    const res = await fetch(apiURL, {
      headers: { "Portal-Id": 3 },
      next: { revalidate: 3600 }
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const apiResponse = await res.json();

    // Corregido: Llamamos a la función de formateo con el objeto directamente, sin envolverlo en un array
    return fromApiResponseToPosts(apiResponse)[0];

    //return apiResponse;
  } catch (error) {
    console.error("Error fetching news by ID: ", error);
    return null;
  }
}


export async function getNewsBySlug(slug) {
  // Solución permanente y eficiente: Llamada directa a la API para buscar por slug
  const apiURL = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?slug=${slug}`;

  try {
    const res = await fetch(apiURL, {
      headers: { "Portal-Id": 3 },
      next: { revalidate: 3600 }
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const apiResponse = await res.json();

    // Asumimos que la API retorna una lista con un solo elemento
    return fromApiResponseToPosts(apiResponse)[0] || null;
  } catch (error) {
    console.error("Error fetching news by slug: ", error);
    return null;
  }
}