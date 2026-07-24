// Ventana de interrupción del servicio Red Link.
// Mientras esté vigente, se muestra el RedLinkModal en vez del PromoModal.
const REDLINK_START = "2026-07-24T00:00:00-03:00";
const REDLINK_END = "2026-07-29T23:59:59-03:00";

export function isRedLinkActive(now = new Date()) {
  return now >= new Date(REDLINK_START) && now <= new Date(REDLINK_END);
}
