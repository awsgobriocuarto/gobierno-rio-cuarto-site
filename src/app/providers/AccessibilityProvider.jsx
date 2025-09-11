// providers/AccessibilityProvider.jsx
"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

//
// 1. ## Crea el contexto

const AccessibilityContext = createContext();

//
// 2. ## Crea el proveedor

export const AccessibilityProvider = ({ children }) => {

  // ## ESTADOS ## //

  // # Estado para el tamaño de la fuente
  const [fontSize, setFontSize] = useState(0);

  // # Estado para el alto contraste
  const [highContrast, setHighContrast] = useState(false);

  // # Estado para el espaciado de texto
  const [textSpacing, setTextSpacing] = useState(0);

  // # Estado para la lectura de texto
  const [isReading, setIsReading] = useState(false);
  const [utterances, setUtterances] = useState([]);

  // # Estado para la fuente de dislexia
  const [isDyslexiaFriendlyFontEnabled, setIsDyslexiaFriendlyFontEnabled] = useState(false);

  // # Estado para el modo de mayúsculas
  const [isUpperCase, setIsUpperCase] = useState(false);

  // ## OPCIONES ## //

  // $ Opciones de tamaño de fuente
  const fontSizes = ['16px', '18px', '20px', '22px', '24px'];

  // $ Opciones de espaciado de texto
  const textSpacings = ['normal', 'medium', 'large', 'extra-large', 'super-large'];

  // ## FUNCIONES ## //

  {/* eslint-disable */ }

  // & Función para ciclar el tamaño de la fuente
  const cycleFontSize = () => {
    setFontSize(prev => (prev + 1) % fontSizes.length);
  };

  // & Función para activar/desactivar el alto contraste
  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  // & Función para ciclar el espaciado
  const cycleTextSpacing = () => {
    setTextSpacing(prev => (prev + 1) % textSpacings.length);
  };

  // & Función para la lectura de texto
  const toggleReading = () => {
    // Si la lectura está activa, la cancelamos y actualizamos el estado
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      setUtterances([]); // Limpia la cola
    } else {
      const readableElements = document.querySelectorAll('[data-read]');
      if (readableElements.length > 0) {
        // Crea un array de SpeechSynthesisUtterance para cada elemento
        const newUtterances = Array.from(readableElements).map(el => {
          return new SpeechSynthesisUtterance(el.innerText);
        });

        setUtterances(newUtterances);
        setIsReading(true);

        // Inicia la lectura de la primera frase
        speakNextUtterance(newUtterances);
      }
    }
  };

  // & Función para la lectura de texto (timer entre secciones)
  const speakNextUtterance = (utterancesQueue) => {
    if (utterancesQueue.length > 0) {
      const currentUtterance = utterancesQueue.shift();
      currentUtterance.onend = () => {
        // Cuando termina de leer, espera 0.5 segundos antes de la siguiente
        setTimeout(() => {
          speakNextUtterance(utterancesQueue);
        }, 500); // Pausa de 500 milisegundos (2 segundos)
      };
      window.speechSynthesis.speak(currentUtterance);
    } else {
      // Si la cola está vacía, la lectura ha terminado
      setIsReading(false);
    }
  };

  // & Función para activar/desactivar la fuente de dislexia
  const toggleDyslexiaFriendlyFont = () => {
    setIsDyslexiaFriendlyFontEnabled(prev => !prev);
  };

  // & Función para alternar el modo de mayúsculas
  const toggleUpperCase = () => {
    setIsUpperCase(prev => !prev);
  };

  // ## EFECTOS ## //

  // Efecto para aplicar el estilo al DOM
  // Se ejecuta cada vez que 'fontSize' cambia

  useEffect(() => {
    document.documentElement.style.fontSize = fontSizes[fontSize];
  }, [fontSize]);

  // Efecto para el alto contraste
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Efecto para el espaciado de texto
  useEffect(() => {
    document.body.className = document.body.className.replace(/text-spacing-\S+/g, '');
    if (textSpacings[textSpacing] !== 'normal') {
      document.body.classList.add(`text-spacing-${textSpacings[textSpacing]}`);
    }
  }, [textSpacing]);

  // Efecto para la fuente de dislexia
  useEffect(() => {
    if (isDyslexiaFriendlyFontEnabled) {
      document.body.classList.add('dyslexia-friendly-font');
    } else {
      document.body.classList.remove('dyslexia-friendly-font');
    }
  }, [isDyslexiaFriendlyFontEnabled]);

  // Efecto para el modo de mayúsculas
  useEffect(() => {
    if (isUpperCase) {
      document.body.classList.add('uppercase-text');
    } else {
      document.body.classList.remove('uppercase-text');
    }
  }, [isUpperCase]);


  // ## Actualiza el 'value' del contexto
  const value = useMemo(() => ({
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
  }), [highContrast, fontSize, textSpacing, isReading, isDyslexiaFriendlyFontEnabled, isUpperCase]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// 3. Crea un hook personalizado para usar el contexto
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility debe ser usado dentro de un AccessibilityProvider');
  }
  return context;
};