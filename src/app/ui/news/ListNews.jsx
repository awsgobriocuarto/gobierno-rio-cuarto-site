import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
import HeaderSection from "../layout/HeaderSection";
export default async function ListNews({ page = 1, limit = 6, area = null }) {
  const posts = await fetchNews({ page, limit });

  //console.log("Noticias:", posts);

  return (
    <section className="section test  " data-read>
      <div className="container">
        <HeaderSection title="Últimas Noticias" />
        <div className="news news-list ">
          <p>{area ? "filtrar noticias por area" : "todas las noticias"}</p>
          <div className="row justify-content-center">
            <Suspense fallback={<div>Cargando...</div>}>
              {posts.map((post) => (
                <CardNews key={post.id} post={post} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
