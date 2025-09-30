import React, { Suspense } from "react";
import ListNews from "@/app/ui/news/ListNews";
import Pagination from "@/app/ui/news/Pagination";
import HeaderSection from "@/app/ui/layout/HeaderSection";
import FormNews from "@/app/ui/news/FormNews";
import { fetchAreaBySlug, fetchAreas } from "@/app/lib/DataAreas";
import { fetchPosts } from "@/app/lib/DataNews";

export const metadata = {
  title: 'Noticias',
  description: 'Noticias del Gobierno de Río Cuarto',
};

export default async function News({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 9;
  const area = searchParams?.area ? searchParams?.area : "";
  const areas = await fetchAreas();
  const posts = await fetchPosts({ page, limit, area });

  const areaName = await fetchAreaBySlug(area);

  const subtitle = areaName ? `${areaName.name} (${posts.total})` : `general (${posts.total})`;


  return (
    <main className="news news-page" data-read>

      <div className="container">
        <div className="row">
          <div className="col-md-6"><HeaderSection title="Noticias" subtitle={subtitle} /></div>
          <div className="col-md-6">
            <div className="news-form">
              <FormNews
                options={areas}
                paramName="area"
                placeholder="Todas las noticias"
                posts={posts}
                subtitle={subtitle}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando noticias</div>}>
            {posts.total === 0 ? (
              <div className="news-not-found">
                <div className="card border-primary">
                  <div className="card-body py-4">
                    <p>No hay noticias disponibles en</p>
                    <p className="lead">{subtitle}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ListNews page={page} limit={limit} area={area} />
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
    </main >
  );
}
