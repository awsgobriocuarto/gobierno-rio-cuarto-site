import React, { Suspense } from "react";
import Slides from "./Slides";
import ListIcons from "../icons/ListIcons"; // agregado
import { fetchNews } from "@/app/lib/DataNews";

const HERO_ICONS = [
  { name: "circles", color: "white", size: "40" },
  { name: "squares", color: "white", size: "40" },
  { name: "waves", color: "white", size: "40" },
];

export default async function Hero() {
  let posts = [];
  try {
    const highlightedPosts = await fetchNews({ limit: 5, highlighted: true });
    posts = [...highlightedPosts];

    if (posts.length < 5) {
      const remainingCount = 5 - posts.length;
      const latestPosts = await fetchNews({ limit: 10 });

      const extraPosts = latestPosts.filter(
        (p) => !posts.some((h) => h.id === p.id),
      );

      posts = [...posts, ...extraPosts].slice(0, 5);
    }
  } catch (error) {
    console.error("Failed to fetch news for hero carousel:", error);
  }

  return (
    <section className="hero" data-read>
      <div className="hero-slides">
        <Suspense fallback={<div>Cargando...</div>}>
          <Slides posts={posts} />
        </Suspense>
      </div>

      <div className="hero-slides-icons" aria-hidden="true">
        <ListIcons icons={HERO_ICONS} />
      </div>
    </section>
  );
}
