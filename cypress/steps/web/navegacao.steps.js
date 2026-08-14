const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../pages/HomePage");

Given("que estou na página inicial", () => {
  HomePage.acessarPaginaInicial();
});
