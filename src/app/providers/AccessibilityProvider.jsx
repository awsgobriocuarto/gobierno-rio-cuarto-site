// providers/AccessibilityProvider.jsx
"use client";

import { createContext, useContext, useState } from 'react';

// 1. Crea el contexto
const AccessibilityContext = createContext();

// 2. Crea el proveedor
export const AccessibilityProvider = ({ children }) => {
  // Aquí irá la lógica y los estados

  const value = {
    // Aquí se exportarán los estados y las funciones
  };

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