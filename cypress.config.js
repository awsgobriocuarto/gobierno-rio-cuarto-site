// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base de tu aplicación Next.js en desarrollo
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // Implementa aquí cualquier evento de nodo si es necesario
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Patrón para encontrar tus archivos de prueba
  },
  // Puedes agregar otras configuraciones globales aquí si es necesario
  // video: false, // Desactiva la grabación de video si no la necesitas
  // screenshotsFolder: 'cypress/screenshots',
});
