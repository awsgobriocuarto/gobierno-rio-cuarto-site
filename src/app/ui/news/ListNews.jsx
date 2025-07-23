import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
export default async function ListNews() {
  const noticias = await fetchNews({ limit: 6 });
  console.log("Noticias:", noticias);
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Noticias</h2>
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {noticias.map((item) => (
              <CardNews key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
