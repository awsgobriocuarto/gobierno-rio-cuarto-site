import React, { Suspense } from "react";
import ListNews from "@/app/ui/news/ListNews";
import Pagination from "@/app/ui/news/Pagination";
import HeaderSection from "@/app/ui/layout/HeaderSection";

export default function News({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 9;

  return (
    <section className="news news-page" data-read>
      <div className="container">
        <div className="row justify-content-center">
          <HeaderSection title="Noticias" />
          <Suspense fallback={<div>Cargando noticias</div>}>
            <ListNews page={page} limit={limit} />
            <Pagination currentPage={page} totalNews={200} limit={limit} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
