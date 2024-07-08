const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://es.aliexpress.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
