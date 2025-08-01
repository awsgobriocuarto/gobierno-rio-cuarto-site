// cypress/support/e2e.js

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora errores de hidratación
  if (err.message.includes("Hydration failed")) {
    return false;
  }
  // Ignora errores de carga de chunks de Turbopack
  if (err.message.includes("Failed to load chunk")) {
    return false;
  }
  // Usamos esta linea para que ignore a las otras llamadas de apis,
  // por ejemplo si quiero testear las noticias, las otras apis como la de tramites no daran error
  if (err.message.includes("Uncaught Promise Rejection")) {
    return false;
  }

  // Para cualquier otro error, Cypress fallará la prueba
  return true;
});
