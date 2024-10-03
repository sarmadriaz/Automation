const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
module.exports = {
  e2e: {
    pageLoadTimeout: 120000, // Increase to 120 seconds (120000ms)
  }
}

