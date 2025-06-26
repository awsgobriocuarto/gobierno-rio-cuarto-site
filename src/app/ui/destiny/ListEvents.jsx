import React, { Suspense } from "react";
import { fetchDestiny } from "@/app/lib/DataDestiny";
import CardEvents from "./CardEvents";
export default async function ListEvents() {
  const { data } = await fetchDestiny({ paginate: 5 });
  console.log("Eventos:", data);
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Eventos</h2>
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {data.map((item) => (
              <CardEvents key={item.id} post={item} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
