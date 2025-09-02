import { fetchNews, getNewsBySlug } from "@/app/lib/DataNews";
import Link from "next/link";

export async function generateStaticParams() {
  const news = await fetchNews({ limit: 10 });
  return news.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsDetailPage({ params }) {
  const { slug } = params;

  //Datos de la noticia
  const newsDetail = await getNewsBySlug(slug);

  if (!newsDetail) {
    return (
      <div className="container my-5">
        <h1>Noticia no encontrada</h1>
        <p>Lo sentimos, la noticia que buscas no pudo ser encontrada.</p>
      </div>
    );
  }

  const allNewsForRelated = await fetchNews({ limit: 4 });
  const relatedNews = allNewsForRelated
    .filter((news) => news.slug !== slug)
    .slice(0, 3);

  return (
    <main data-read>
      <div className="container my-5">
        <div className="row">
          {/* Sección de Detalle de la Noticia Principal */}
          <section className="col-lg-8">
            <article>
              <span className="sr-only">Detalle de la noticia</span>
              <h1 className="mb-4">{newsDetail.title}</h1>
              {newsDetail.image && (
                <>
                  {/* eslint-disable-next-line */}{" "}
                  <img
                    src={newsDetail.image}
                    alt={newsDetail.title}
                    width={400}
                    height={400}
                    className="card-img-top"
                  />{" "}
                </>
              )}
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: newsDetail.body }}
              ></div>

              <p className="text-muted mt-3">
                Publicado el:{" "}
                {new Date(newsDetail.publication_date).toLocaleDateString(
                  "es-AR",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: newsDetail.iframe }}
              ></div>
            </article>
          </section>

          {/* Sección de Noticias Relacionadas */}
          <section className="col-lg-4">
            <div className="card my-4">
              <h5 className="card-header">Noticias Relacionadas</h5>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {relatedNews.length > 0 ? (
                    relatedNews.map((news) => (
                      <li key={news.id} className="mb-2">
                        <Link
                          href={`/news/${news.slug}`}
                          className="text-decoration-none"
                        >
                          {news.image && (
                            <>
                              {/* eslint-disable-next-line */}
                              <img
                                src={news.image}
                                alt={news.title}
                                width={200}
                                height={200}
                                className="card-img-top"
                              />
                            </>
                          )}
                          {news.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>No hay noticias relacionadas.</li>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
