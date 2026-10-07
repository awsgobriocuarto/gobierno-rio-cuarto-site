// Wrapper seguro de OpenPanel (window.op se carga desde layout.js).
// Si el script está bloqueado (adblock) o aún no cargó, no rompe nada.
export function track(name, props = {}) {
  if (typeof window === "undefined" || typeof window.op !== "function") return;
  try {
    window.op("track", name, props);
  } catch {
    // el tracking nunca debe afectar la experiencia del usuario
  }
}
