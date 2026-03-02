import React, { Suspense } from "react";
import ListNews from "@/app/ui/news/ListNews";
import Pagination from "@/app/ui/news/Pagination";
import HeaderSection from "@/app/ui/layout/HeaderSection";
import NewsFilters from "@/app/ui/news/NewsFilters";
import NewsCarousel from "@/app/ui/news/NewsCarousel";
import { fetchAreaBySlug, fetchAreas } from "@/app/lib/DataAreas";
import { fetchPosts, fetchNews } from "@/app/lib/DataNews";

export const metadata = {
  title: "Noticias",
  description: "Noticias del Gobierno de Río Cuarto",
};

export default async function News({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 9;
  const areaSlug = searchParams?.area ? searchParams?.area : "";
  const search = searchParams?.search ? searchParams?.search : "";

  const [areas, posts, areaName, carouselPosts] = await Promise.all([
    fetchAreas(),
    fetchPosts({ page, limit, area: areaSlug, search }),
    // Solo se ejecuta fetchAreaBySlug si hay un filtro de área
    areaSlug ? fetchAreaBySlug(areaSlug) : Promise.resolve(null),
    // Últimas 6 noticias para el carousel (sin filtros)
    fetchNews({ page: 1, limit: 6 }),
  ]);

  const subtitle = areaName
    ? `${areaName.name} (${posts.total})`
    : `general (${posts.total})`;

  return (
    <main className="news news-page" data-read>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HeaderSection title="Noticias" subtitle={subtitle} />

            {/* Carousel de imágenes de las últimas noticias */}
            {carouselPosts && carouselPosts.length > 0 && (
              <NewsCarousel posts={carouselPosts} />
            )}

            <NewsFilters areas={areas} />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <Suspense fallback={<div>Cargando noticias</div>}>
            {posts.total === 0 ? (
              <div className="news-not-found">
                <div className="card border-primary">
                  <div className="card-body py-4">
                    <p>No se encontraron noticias para la búsqueda.</p>
                    <p className="lead">{search ? `"${search}"` : ""}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ListNews
                  page={page}
                  limit={limit}
                  area={areaSlug}
                  search={search}
                  showHeader={false}
                />
                <Pagination
                  currentPage={posts.current_page}
                  totalNews={posts.total}
                  limit={limit}
                />
              </>
            )}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
