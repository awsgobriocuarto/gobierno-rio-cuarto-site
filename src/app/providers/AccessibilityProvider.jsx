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

  // & Función recursiva para leer la cola de textos
  // Usamos useCallback para que la referencia sea estable
  const speakNext = useCallback((textArray, index) => {
    // Si ya no hay más textos o el estado cambió a false, terminamos
    if (index >= textArray.length) {
      setIsReading(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textArray[index]);
    utterance.lang = "es-ES"; // Opcional: define el idioma

    utterance.onend = () => {
      // Verificamos el estado actual justo antes de pasar al siguiente
      // Usamos un timeout para la pausa solicitada
      setTimeout(() => {
        setIsReading((currentStatus) => {
          if (currentStatus) {
            speakNext(textArray, index + 1);
          }
          return currentStatus;
        });
      }, 500);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // & Función principal de lectura
  const toggleReading = () => {
    if (isReading) {
      // 1. Detener la síntesis de voz inmediatamente
      window.speechSynthesis.cancel();
      // 2. Cambiar el estado para que 'onend' sepa que no debe continuar
      setIsReading(false);
    } else {
      const readableElements = document.querySelectorAll("[data-read]");
      if (readableElements.length > 0) {
        const texts = Array.from(readableElements).map((el) => el.innerText);
        setIsReading(true);
        speakNext(texts, 0);
      }
    }
  };

  // ## EFECTOS ## //

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
