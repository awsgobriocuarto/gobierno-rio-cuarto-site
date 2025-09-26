import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";

export default async function ListNews({ page = 1, limit = 6, area = "" }) {
  const posts = await fetchNews({ page, limit, area });

  //console.log(posts);

  return (
    <section data-read className="news-list ">
      <div className="row">
        <Suspense fallback={<div>Cargando...</div>}>
          {posts.map((post) => (
            <CardNews key={post.id} post={post} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
