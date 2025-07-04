import React, { Suspense } from "react";
import FormalitiesList from "../ui/formalities/formalities-list";

export default function page() {
  return (
    <Suspense>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Trámites</h2>
        <div className="row justify-content-center">
          <Suspense fallback={<div>Cargando trámites...</div>}>
            {/* Suspense is used to handle loading states */}
            <FormalitiesList />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}
