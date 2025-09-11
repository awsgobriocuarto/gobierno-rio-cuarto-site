import React, { Suspense } from "react";
import { fetchCategories } from "@/app/lib/DataFormalities";
import CardCategories from "./CardCategories";
import HeaderSection from "../layout/HeaderSection";
export default async function ListCategories() {
  const categories = await fetchCategories();
  //console.log("Categories:", categories);
  return (
    <section className="section test" data-read>
      <div className="container">
        <HeaderSection title="Trámites" />
        <div className="row justify-content-center buttons">
          <Suspense fallback={<div>Cargando...</div>}>
            {categories.map((category) => (
              <div className="col-md-4" key={category.id}>
                <CardCategories category={category} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
