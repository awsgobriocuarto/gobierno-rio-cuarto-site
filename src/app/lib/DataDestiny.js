const API_URL = process.env.API_BASE_URL_DESTINO;

export function fetchDestiny({ paginate = 9, query = null, page = null } = {}) {
  const apiUrl = `${API_URL}/events?paginate=${paginate}${
    query ? `&query=${query}` : ""
  }${page ? `&page=${page}` : ""}`;

  return fetch(apiUrl, {})
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error: ", error);
    });
}
export function fromApiResponseToPosts(apiResponse) {
  return apiResponse.data.map((post) => ({
    id: post.id,
    title: post.title,
    summary: post.summary,
    image: post.image.mediumUrl,
    slug: post.slug,
    createdAt: post.created_at,
  }));
}
