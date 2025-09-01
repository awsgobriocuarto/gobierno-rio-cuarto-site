'use client';

import { useAccessibility } from "@/app/providers/AccessibilityProvider";



export default function AccessibilityMenu({ menuOpen }) {
  const { toggleHighContrast } = useAccessibility();

  if (!menuOpen) {
    return null;
  }

  return (
    <div className="accessibilityMenu">
      <div className="menuHeader">
        <h4>Accesibilidad</h4>
      </div>
      <div className="menuOptions">
        {/* Opción de Alto Contraste */}
        <button className="optionButton" onClick={toggleHighContrast}>
          <i className="fa-solid fa-circle-half-stroke"></i>
          <span>Alto Contraste</span>
        </button>
      </div>
    </div>
  );
}