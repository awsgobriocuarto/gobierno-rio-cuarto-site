'use client';
import { useAccessibility } from "@/app/providers/AccessibilityProvider";

export default function AccessibilityMenu({ menuOpen }) {
  const {
    highContrast,
    toggleHighContrast,
    cycleFontSize,
    cycleTextSpacing,
    isReading,
    toggleReading,
    isDyslexiaFriendlyFontEnabled,
    toggleDyslexiaFriendlyFont,
  } = useAccessibility();


  if (!menuOpen) {
    return null;
  }

  return (
    <div className="accessibilityMenu">
      <div className="menuHeader">
        <h5>Accesibilidad</h5>
      </div>
      <div className="menuOptions">
        {/* Boton para Cambiar el Tamaño de la Fuente */}
        <button className="optionButton" onClick={cycleFontSize}>
          <i className="fa-solid fa-text-height"></i>
          <span>Aumentar Fuente</span>
        </button>
        {/* Boton para Activar/Desactivar el Alto Contraste */}
        <button className="optionButton d-none" onClick={toggleHighContrast}>
          <i className="fa-solid fa-circle-half-stroke"></i>
          <span>Alto Contraste: {highContrast ? 'ON' : 'OFF'}</span>
        </button>
        {/* Botón para el espaciado de texto */}
        <button className="optionButton" onClick={cycleTextSpacing}>
          <i className="fa-solid fa-arrows-up-down-left-right"></i>
          <span>Espaciado de Texto</span>
        </button>
        {/* Botón para la Lectura de Texto */}
        <button className="optionButton" onClick={toggleReading}>
          <i className="fa-solid fa-volume-high"></i>
          <span>{isReading ? 'Detener Lectura' : 'Leer Texto'}</span>
        </button>
        {/* Botón para la fuente de dislexia */}
        <button className="optionButton" onClick={toggleDyslexiaFriendlyFont}>
          <i className="fa-solid fa-font"></i>
          <span>Fuente para Dislexia: {isDyslexiaFriendlyFontEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </div>
  );
}