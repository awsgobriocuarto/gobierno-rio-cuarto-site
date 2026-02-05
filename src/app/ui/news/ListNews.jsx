import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
import HeaderSection from "../layout/HeaderSection";
import Link from "next/link";

export default async function ListNews({ page, limit, area }) {
  const posts = await fetchNews({ page, limit, area });

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section data-read className="news-list">
      <div className="container">
        <HeaderSection
          title="Últimas Noticias"
          subtitle="Noticias recientes y novedades del municipio"
        />

        <div className="row">
          <Suspense fallback={<div>Cargando...</div>}>
            {posts.map((post) => (
              <CardNews key={post.id} post={post} />
            ))}
          </Suspense>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Link href="/noticias" className="btn btn-dark mb-5">
            Ver más noticias
          </Link>
        </div>
      </div>
    </section>
  );
}
