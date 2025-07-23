import React, { Suspense } from "react";
import { fetchCategories } from "@/app/lib/DataFormalities";
import CardCategories from "./CardCategories";
export default async function ListCategories() {
  const categories = await fetchCategories();
  console.log("Categories:", categories);
  return (
    <>
      <h2 className="mb-5 text-center">Tramites</h2>
      <div className="row justify-content-center">
        <Suspense fallback={<div>Cargando...</div>}>
          {categories.map((category) => (
            <CardCategories key={category.id} category={category} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
