import HeaderSection from "@/app/ui/layout/HeaderSection";
import Link from "next/link";
import { fetchSearch } from "@/app/lib/DataSearch";

export const metadata = {
  title: "Turnos",
  description:
    "Servicios y trámites con turno previo del Gobierno de Río Cuarto",
};

export default async function Turnos() {
  const results = await fetchSearch("Turnos");

  const ORDER_KEYWORDS = [
    "licencia",
    "vial",
    "salud",
    "registro",
    "castrac",
    "manipul",
    "anticonceptiv",
    "inclusiv",
    "interrupci",
    "hiv",
    "hepatitis",
  ];

  const getOrder = (title) => {
    const lower = title.toLowerCase();
    const idx = ORDER_KEYWORDS.findIndex((kw) => lower.includes(kw));
    return idx === -1 ? ORDER_KEYWORDS.length : idx;
  };

  const items = [
    ...(results?.procedures?.data || []).map((t) => ({
      id: `t-${t.id}`,
      icon: t.categories?.[0]?.image || "fa-file-lines",
      area: t.area?.name || "Trámite",
      title: t.title,
      summary: t.excerpt || t.summary || "",
      href: t.online == 1 && t.url ? t.url : `/tramites/${t.slug}`,
      external: !!(t.online == 1 && t.url),
    })),
    ...(results?.entries?.data || []).map((p) => ({
      id: `p-${p.id}`,
      icon: p.categories?.[0]?.image || "fa-calendar-check",
      area: p.area?.name || "Servicio",
      title: p.title,
      summary: p.excerpt || p.summary || "",
      href: `/seccion/${p.slug}`,
      external: false,
    })),
  ].sort((a, b) => getOrder(a.title) - getOrder(b.title));

  return (
    <main className="turnos-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <HeaderSection
              title="Turnos"
              subtitle="Servicios con turno o inscripción previa"
            />
          </div>
        </div>

        <div className="row mt-3">
          {items.map((item) => {
            const cardContent = (
              <div className="turno-card">
                <div className="turno-card-icon">
                  <i className={`fas fa-fw ${item.icon}`}></i>
                </div>
                <div className="turno-card-body">
                  <h5 className="turno-card-title">{item.title}</h5>
                  {item.summary && (
                    <p className="turno-card-summary">{item.summary}</p>
                  )}
                </div>
                <div className="turno-card-footer">
                  <div className="turno-btn">
                    <span>Avanzar</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            );

            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="turno-card-link"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link href={item.href} className="turno-card-link">
                    {cardContent}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
