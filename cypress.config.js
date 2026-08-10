const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
require("dotenv").config();

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  allureWriter(on, config);

  config.env = {
    ...config.env,
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    LOGIN_EMAIL: process.env.LOGIN_EMAIL,
    LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
  };

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    env: {
      allure: true,
      allureResultsPath: "allure-results",
      filterSpecs: true,
      tags: "@focus"
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
