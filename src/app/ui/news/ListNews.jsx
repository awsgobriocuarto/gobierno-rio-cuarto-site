import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
import HeaderSection from "../layout/HeaderSection";
export default async function ListNews({ page = 1, limit = 6 }) {
  const noticias = await fetchNews({ page, limit });

  console.log("Noticias:", noticias);
  return (
    <section className="section">
      <div className="container">
        <HeaderSection title="Noticias" />
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {noticias.map((item) => (
              <CardNews key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}

// <HeaderSection title="Eventos" />
