"use client";
import Link from "next/link";
import { useState, useRef } from "react";

const AREA_TAGLINES = {
  "Intendencia": "Gobierno Cercano, Participativo y Eficiente.",
  "Gobierno": "Descentralización / Empleo / Formación Laboral / Cooperativismo / Vecinales / Recursos Humanos / Comunicación.",
  "Gestión y Participación Ciudadana": "Presupuesto Participativo / SUAV / Juventud / Derechos Humanos / Educación / La Muni en tu Barrio.",
  "Obras y Servicios Públicos": "Servicios Públicos / Obras Privadas / Movilidad Urbana / Hábitat / Ambiente / Mantenimiento vial.",
  "Prevención y Convivencia Ciudadana": "Seguridad / Tránsito y Transporte / Educación Vial / Espectáculos Públicos / Defensa Civil / Fiscalía Contravencional.",
  "Economía e Innovación": "Comercio e Industria / Trámites Web / Gestión Tecnológica / Gestión de Pagos / Proveedores / Transparencia.",
  "Desarrollo Comunitario": "Desarrollo Social / Género, Niñez, Adolescencia y Familia / Adultos Mayores / Discapacidad / Zoonosis / Bromatología.",
  "Desarrollo y Promoción Local": "Comercios e Industrias / Cultura / Deporte / Turismo / Economía Naranja / Industria del conocimiento.",
  "Salud": "Turnos online / Atención Primaria / Salud 24 hs / Centro de Salud / Dispensarios / Maternidad Kowalk / Adicciones.",
  "Fiscalía Municipal": "Gestiones Judiciales y Extrajudiciales / Saneamiento y Pago de Títulos / Causas Tributarias.",
  "EMOS": "Agua Potable / Cloacas / Desagües Pluviales.",
};

export default function CardAreas({ area, isSmall }) {
  const tagline = AREA_TAGLINES[area.name];
  const [touched, setTouched] = useState(false);
  const hideTimer = useRef(null);

  const handleTouchStart = () => {
    clearTimeout(hideTimer.current);
    setTouched(true);
  };

  const handleTouchEnd = () => {
    hideTimer.current = setTimeout(() => setTouched(false), 400);
  };

  return (
    <Link
      href={area.href || `/areas/${area.slug}`}
      className="text-decoration-none w-100 h-80 d-block"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`card area-folder card-area h-100 ${isSmall ? "card-small" : ""} ${touched ? "is-touched" : ""}`}
      >
        <div className="card-body">
          <div className="pe-2 overflow-hidden flex-grow-1">
            <h5 className="area-folder-title">{area.name}</h5>
            {!isSmall && <div className="area-folder-separator"></div>}
            {!isSmall && tagline && (
              <div className="area-folder-tagline-wrapper">
                <p className="area-folder-tagline">{tagline}</p>
              </div>
            )}
          </div>
          <div className="arrow-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
