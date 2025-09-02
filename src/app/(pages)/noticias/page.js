import React, { Suspense } from "react";
import ListNews from "@/app/ui/news/ListNews";
import Pagination from "@/app/ui/news/Pagination";

export default function News({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 12;

  return (
    <Suspense>
      <article className="container mt-5" data-read>
        <main className="row justify-content-center">
          <Suspense fallback={<div>Cargando noticias</div>}>
            <ListNews page={page} limit={limit} />
            <Pagination currentPage={page} totalNews={200} limit={limit} />
          </Suspense>
        </main>
      </article>
    </Suspense>
  );
}
