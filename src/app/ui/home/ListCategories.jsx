import React, { Suspense } from "react";
import { fetchCategories } from "@/app/lib/DataFormalities";
import CardCategories from "./CardCategories";
import HeaderSection from "../layout/HeaderSection";

export default async function ListFormalityCategories() {
  const categories = await fetchCategories();

  return (
    <section className="formalities formalities-categories" data-read>
      <div className="container">
        <HeaderSection
          title="¿Qué necesitás hacer?
"
          subtitle="Trámites y servicios

"
          bgImage="/images/gente2.jpg"
        />
        <div className="row justify-content-center buttons ">
          <Suspense fallback={<div>Cargando...</div>}>
            {categories.slice(0, 9).map((category) => (
              <div className="col-md-6 col-lg-6 col-xl-4" key={category.id}>
                <CardCategories category={category} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
