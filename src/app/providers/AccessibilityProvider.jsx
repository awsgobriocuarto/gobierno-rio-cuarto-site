// providers/AccessibilityProvider.jsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  // ## ESTADOS ## //
  const [fontSize, setFontSize] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [textSpacing, setTextSpacing] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isDyslexiaFriendlyFontEnabled, setIsDyslexiaFriendlyFontEnabled] =
    useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);

  // ## OPCIONES ## //
  const fontSizes = ["16px", "18px", "20px", "22px", "24px"];
  const textSpacings = [
    "normal",
    "medium",
    "large",
    "extra-large",
    "super-large",
  ];

  // ## FUNCIONES ## //

  const cycleFontSize = () =>
    setFontSize((prev) => (prev + 1) % fontSizes.length);
  const toggleHighContrast = () => setHighContrast((prev) => !prev);
  const cycleTextSpacing = () =>
    setTextSpacing((prev) => (prev + 1) % textSpacings.length);
  const toggleDyslexiaFriendlyFont = () =>
    setIsDyslexiaFriendlyFontEnabled((prev) => !prev);
  const toggleUpperCase = () => setIsUpperCase((prev) => !prev);

  // & Habla el texto dado, cancelando cualquier lectura previa
  const speakText = useCallback((text) => {
    window.speechSynthesis.cancel();
    if (!text || !text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  }, []);

  // & Modo hover: activa/desactiva el lector de texto al pasar el mouse
  const toggleReading = () => {
    setIsReading((prev) => {
      if (prev) {
        window.speechSynthesis.cancel();
      }
      return !prev;
    });
  };

  // ## EFECTOS ## //

  // & Efecto de escucha para el modo hover del lector
  useEffect(() => {
    if (!isReading) return;

    let hoverTimeout = null;
    let lastTarget = null;

    const handleMouseOver = (e) => {
      // 1. Buscamos la etiqueta de texto más cercana al cursor
      const target = e.target.closest(
        "h1, h2, h3, h4, h5, h6, p, a, button, li, span, label, th, td, img",
      );

      if (!target) return;

      // 2. Comprobamos que esa etiqueta se encuentre dentro de un área marcada como [data-read]
      if (!target.closest("[data-read]")) return;

      // 3. Si el usuario se está moviendo dentro de la misma etiqueta, la ignoramos.
      if (target === lastTarget) return;
      lastTarget = target;

      // 4. Esperar antes de leer. Previene que explote el audio al cruzar muchos elementos muy rápido
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        const textToRead =
          target.tagName.toLowerCase() === "img"
            ? target.alt
            : target.innerText || target.textContent;

        if (textToRead && textToRead.trim()) {
          speakText(textToRead);
        }
      }, 350); // Ajuste clave para navegadores menos permisivos con el spam (Firefox/Brave)
    };

    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.style.cursor = "help";

    return () => {
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "";
      clearTimeout(hoverTimeout);
      window.speechSynthesis.cancel();
    };
  }, [isReading, speakText]);

  useEffect(() => {
    document.documentElement.style.fontSize = fontSizes[fontSize];
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    // Limpia clases anteriores de espaciado
    document.body.className = document.body.className.replace(
      /text-spacing-\S+/g,
      "",
    );
    if (textSpacings[textSpacing] !== "normal") {
      document.body.classList.add(`text-spacing-${textSpacings[textSpacing]}`);
    }
  }, [textSpacing]);

  useEffect(() => {
    document.body.classList.toggle(
      "dyslexia-friendly-font",
      isDyslexiaFriendlyFontEnabled,
    );
  }, [isDyslexiaFriendlyFontEnabled]);

  useEffect(() => {
    document.body.classList.toggle("uppercase-text", isUpperCase);
  }, [isUpperCase]);

  // Limpieza al desmontar el componente (detener voz si el usuario cambia de página)
  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const value = useMemo(
    () => ({
      highContrast,
      toggleHighContrast,
      fontSize,
      cycleFontSize,
      textSpacing,
      cycleTextSpacing,
      isReading,
      toggleReading,
      isDyslexiaFriendlyFontEnabled,
      toggleDyslexiaFriendlyFont,
      isUpperCase,
      toggleUpperCase,
    }),
    [
      highContrast,
      fontSize,
      textSpacing,
      isReading,
      isDyslexiaFriendlyFontEnabled,
      isUpperCase,
    ],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility debe ser usado dentro de un AccessibilityProvider",
    );
  }
  return context;
};
