import React, { Suspense } from "react";
import { fetchCategories } from "@/app/lib/DataFormalities";
import CardCategories from "./CardCategories";
import HeaderSection from "../layout/HeaderSection";
export default async function ListCategories() {
  const categories = await fetchCategories();
  //console.log("Categories:", categories);
  return (
    <section className="section" data-read>
      <div className="container">
        <HeaderSection title="Trámites" />
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {categories.map((category) => (
              <CardCategories key={category.id} category={category} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
