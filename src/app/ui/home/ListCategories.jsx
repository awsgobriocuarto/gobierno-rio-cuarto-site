import React, { Suspense } from "react";
import Link from "next/link";
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

        <div className="text-center mt-4 mb-4">
          <Link
            href="/tramites"
            className="btn btn-outline-primary rounded-pill px-5 py-2"
          >
            Ver todos los Trámites
          </Link>
        </div>
      </div>
    </section>
  );
}
