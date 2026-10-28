import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom no implementa speechSynthesis; lo mockeamos para los tests de accesibilidad
Object.defineProperty(window, "speechSynthesis", {
  value: {
    cancel: vi.fn(),
    speak: vi.fn(),
  },
  writable: true,
});
