import { fetchPosts } from "@/app/lib/DataNews";
import Link from "next/link";
import React from "react";

export default async function RelatedNews({
  postId = "",
  area = "",
  page = 1,
  limit = 6,
  title = "Noticias Relacionadas",
}) {
  let posts = [];
  let currentTitle = title;

  // 1. Si hay área, intentar primero con highlighted_area=true
  if (area) {
    const highlightedResult = await fetchPosts({ page, limit, area, highlighted_area: true });
    posts = (highlightedResult.data || []).filter((post) => post.id !== postId);
  }

  // 2. Si no hay destacadas, caer al comportamiento original (todas las del área)
  if (posts.length === 0) {
    const relatedResult = await fetchPosts({ page, limit, area });
    posts = (relatedResult.data || []).filter((post) => post.id !== postId);
  }

  // 3. Si el área no tiene noticias, mostrar las últimas generales
  if (posts.length === 0) {
    const latestResult = await fetchPosts({ page, limit, area: "" });
    posts = (latestResult.data || []).filter((post) => post.id !== postId);
    currentTitle = "Últimas Noticias (General)";

    if (posts.length === 0) {
      return null;
    }
  }

  console.log(`Mostrando ${posts.length} ítems. Tipo: ${currentTitle}`);

  return (
    <div className="news-related">
      <h4 className="news-related--subtitle">{title}</h4>
      {posts.map((post) => (
        <Link href={`/noticias/${post.slug}`} key={post.id}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                {/* eslint-disable-next-line */}
                <img src={post.image} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    <small>
                      {new Date(post.published_at).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </small>
                  </p>
                  <p className="card-title">{post.title}</p>
                  <p className="card-subtitle">
                    <small>{post.owner_area.name}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <div className="mt-4">
        <Link href="/noticias" className="btn btn-outline-success w-100">
          Ver más noticias
        </Link>
      </div>
    </div>
  );
}
