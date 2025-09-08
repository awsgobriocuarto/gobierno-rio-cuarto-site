import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
export default async function ListNews({ page = 1, limit = 6 }) {
  const noticias = await fetchNews({ page, limit });

  //console.log("Noticias:", noticias);

  return (
    <div className="news news-list">
      <div className="row justify-content-center">
        <Suspense fallback={<div>Cargando...</div>}>
          {noticias.map((item) => (
            <CardNews key={item.id} post={item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
