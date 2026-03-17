"use client";

import { useState } from "react";
import CardNews from "./CardNews";
import { fetchNews } from "@/app/lib/DataNews";

export default function LoadMoreNews({ initialPosts, area, search, limit }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialPosts.length >= limit);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;

    try {
      const newPosts = await fetchNews({
        page: nextPage,
        limit,
        area,
        search,
      });

      if (newPosts && newPosts.length > 0) {
        setPosts((prev) => [...prev, ...newPosts]);
        setPage(nextPage);
        if (newPosts.length < limit) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        {posts.map((post) => (
          <CardNews key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <button
            onClick={loadMore}
            disabled={loading}
            className="btn btn-outline-success rounded-pill px-5 py-2 news-load-more"
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Cargando...
              </>
            ) : (
              "Ver más noticias"
            )}
          </button>
        </div>
      )}
    </>
  );
}
