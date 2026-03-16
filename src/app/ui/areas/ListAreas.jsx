import { Suspense } from "react";
import Link from "next/link";
import HeaderSection from "../layout/HeaderSection";
import CardAreas from "./CardAreas";
import { fetchAreas } from "@/app/lib/DataAreas";

export default async function ListAreas() {
  const areas = await fetchAreas();
  areas.map((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
  });
  areas.sort((a, b) => a.order - b.order);

  return (
    <section id="areas" className="area area-home bg-gray" data-read>
      <div className="container">
        <HeaderSection
          title="GESTIONAMOS PARA VOS"
          subtitle="Secretarías y áreas municipales"
          bgImage="/images/gente1.jpg"
        />
        <div className="area-vision-text">
          Somos un gobierno receptivo que pone al vecino en el centro de cada
          decisión, transformando la escucha en soluciones reales. Construimos
          una ciudad habitable e inclusiva, facilitando la participación directa
          de la comunidad en la gestión pública. Nuestra prioridad es generar
          oportunidades concretas que impulsen el desarrollo sostenible y la
          equidad social.
        </div>
        <div className="row justify-content-center buttons-areas gx-4 gy-1">
          <Suspense fallback={<div>Cargando...</div>}>
            {areas.map((area) => (
              <div className="col-12 col-sm-6 col-lg-4" key={area.id}>
                <CardAreas area={area} />
              </div>
            ))}
          </Suspense>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Link
            href="/areas"
            className="btn btn-outline-orange rounded-pill px-5 py-2 mb-5"
          >
            Organigrama Municipal{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
