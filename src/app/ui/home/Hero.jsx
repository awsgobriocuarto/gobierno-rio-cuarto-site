import React, { Suspense } from "react";
import Slides from "./Slides";
import ListIcons from "../icons/ListIcons"; // agregado
import { fetchNews } from "@/app/lib/DataNews";

const HERO_ICONS = [
  { name: "circles", color: "white", size: "24" },
  { name: "squares", color: "white", size: "24" },
  { name: "waves", color: "white", size: "24" },
];

export default async function Hero() {
  let posts = [];
  try {
    posts = await fetchNews({ limit: 3 });
  } catch (error) {
    console.error("Failed to fetch news for hero carousel:", error);
  }

  return (
    <section className="hero" data-read>
      <div className="hero-slides">
        <Slides posts={posts} />
      </div>

      {/* overlay de íconos fuera de .hero-slides para evitar heredar opacity */}
      <div className="hero-slides-icons" aria-hidden="true">
        <ListIcons icons={HERO_ICONS} />
      </div>
    </section>
  );
}
