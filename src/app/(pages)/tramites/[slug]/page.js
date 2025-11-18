import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import {
  fetchFormalities,
  fetchFormalitiesBySlug,
} from "@/app/lib/DataFormalities";
import AreaDetail from "@/app/ui/formality/AreaDetail";
import FormalityInfo from "@/app/ui/formality/FormalityInfo";
import FormalityMedia from "@/app/ui/formality/FormalityMedia";
import Banners from "@/app/ui/commons/Banners";
import LinkToBack from "@/app/ui/LinkToBack";

export async function generateMetadata({ params }) {
  // read route params
  const { slug } = await params;

  // fetch data
  const formality = await fetchFormalitiesBySlug(slug);

  return {
    title: formality.title,
  };
}

export default async function Formality({ params }) {
  const slug = params.slug;
  const formality = await fetchFormalitiesBySlug(slug);
  const area = await fetchAreaBySlug(formality.area.slug);

  if (!formality) {
    return "nada por aqui";
  }
  return (
    <main className="formalities formalities-page formalities-detail">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8">
            <div className="formalities-detail--header">
              <div className="formalities-detail--categories">
                {formality.categories.map((category) => (
                  <span key={category.id}>
                    <i className={`fa-solid fa-fw ${category.image}`}></i>
                    {category.name}
                  </span>
                ))}
              </div>

              <h3 className="title">{formality.title}</h3>
              <p
                className="formalities-detail--subtitle"
                dangerouslySetInnerHTML={{ __html: formality.summary }}
              ></p>
              {formality.online == 1 ? (
                <>
                  <p className="formalities-detail--subtitle mt-4 mb-3">
                    Este trámite se puede realizar de manera online
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href={formality.url}
                      className="btn btn-lg btn-primary text-white"
                      target="_blank"
                    >
                      Iniciar trámite online
                    </a>
                    <LinkToBack variant="btn-link" />
                  </div>
                </>
              ) : (
                <LinkToBack variant="btn-link p-0" />
              )}
            </div>

            {/* procedure */}
            {formality.procedure ? (
              <FormalityInfo title="Procedimiento" text={formality.procedure} />
            ) : (
              ""
            )}
            {/* requirements	who	when	previous	cost time	more */}
            {/* requirements */}
            {formality.requirements ? (
              <FormalityInfo
                title="Requerimientos"
                text={formality.requirements}
              />
            ) : (
              ""
            )}
            {/* who */}
            {formality.who ? (
              <FormalityInfo title="Quién puede hacerlo" text={formality.who} />
            ) : (
              ""
            )}
            {/* when */}
            {formality.when ? (
              <FormalityInfo title="Dónde se realiza" text={formality.when} />
            ) : (
              ""
            )}
            {/* previous */}
            {formality.previous ? (
              <FormalityInfo
                title="¿Requiere trámites previos?"
                text={formality.previous}
              />
            ) : (
              ""
            )}
            {/* cost */}
            <div className="formality-info">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Costo</h5>
                  <div />
                  {formality.cost && formality.cost != 2 ? (
                    <span>
                      El trámite tiene costo, sugerimos contactarse con el área
                      responsable para consultar sobre las tasas vigentes
                    </span>
                  ) : (
                    <span>El trámite no tiene costo</span>
                  )}
                </div>
              </div>
            </div>

            {/* time */}
            {formality.time ? (
              <FormalityInfo
                title="¿Cuánto tiempo demora?"
                text={formality.time}
              />
            ) : (
              ""
            )}
            {/* more */}
            {formality.more ? (
              <FormalityInfo title="Más info" text={formality.more} />
            ) : (
              ""
            )}
            {/* media */}
            {formality.media.length > 0 ? (
              <FormalityMedia media={formality.media} />
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4">
            <AreaDetail area={area} formality={formality} />
            <Banners
              title="Requisitos para hacer trámites Online"
              text="Para poder realizar los trámites de manera online necesitas tener CiDinivel 2"
              buttonColor="primary"
              buttonUrl="https://prensa.cba.gov.ar/informacion-general/ciudadano-digital-el-paso-a-paso-para-obtener-cidi-nivel-2/"
              buttonText="Obtener CiDI Nivel 2"
              variant=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
