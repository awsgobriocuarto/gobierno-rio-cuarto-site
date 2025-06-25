export function fetchNews({ page = 1, limit = 9 } = {}) {
  const apiURL = page
    ? `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}&page=${page}`
    : `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}`;
  return fetch(apiURL, {
    headers: {
      "Portal-Id": 3,
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToPosts)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
export function fromApiResponseToPosts(apiResponse) {
  return apiResponse.data.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    image: post.main_picture.medium,
    slug: post.slug,
    createdAt: post.created_at,
  }));
}
