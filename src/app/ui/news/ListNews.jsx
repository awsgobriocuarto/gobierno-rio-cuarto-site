import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import LoadMoreNews from "./LoadMoreNews";
import HeaderSection from "../layout/HeaderSection";
import CardNews from "./CardNews";
import Link from "next/link";

export default async function ListNews({
  page = 1,
  limit = 9,
  area = "",
  search = "",
  showHeader = true,
  isHome = false, // Nuevo prop
}) {
  const posts = await fetchNews({ page, limit, area, search });

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section data-read className="news-list">
      <div className="container">
        {showHeader && (
          <HeaderSection
            title="Novedades "
            subtitle="Noticias y anuncios de la ciudad"
            bgImage="/images/gente3.jpg"
          />
        )}

        {isHome ? (
          <>
            <div className="row">
              {posts.map((post) => (
                <CardNews key={post.id} post={post} />
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Link
                href="/noticias"
                className="btn btn-outline-success rounded-pill px-5 py-2 mb-5"
              >
                Ver más noticias
              </Link>
            </div>
          </>
        ) : (
          <Suspense fallback={<div>Cargando...</div>}>
            <LoadMoreNews
              key={`${area}-${search}`}
              initialPosts={posts}
              area={area}
              search={search}
              limit={limit}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
}
