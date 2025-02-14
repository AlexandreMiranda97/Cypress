const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xzkgtr",
  e2e: {
    pageLoadTimeout: 30000,
    video: true,
    defaultBrowser: "chrome",
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch" === "chrome", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push(
            "--disable-save-password-bubble",
            "--disable-password-generation",
            "--disable-popup-blocking"
          )
        }
        return launchOptions;
      })
    },
  },
});