const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xzkgtr",
  e2e: {
    // baseUrl: 'https://parabank.parasoft.com/parabank/index.htm/',
    failOnStatusCode: 'false',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});