import React, { Suspense } from "react";
import { fetchCategories } from "@/app/lib/DataFormalities";
import CardFormalities from "./CardFormalities";
export default async function ListFormalities() {
  const categories = await fetchCategories();
  console.log("Categories:", categories);
  return (
    <>
      <h2 className="mb-5 text-center">Tramites</h2>
      <div className="row justify-content-center">
        <Suspense fallback={<div>Cargando...</div>}>
          {categories.map((item) => (
            <CardFormalities key={item.id} post={item} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
