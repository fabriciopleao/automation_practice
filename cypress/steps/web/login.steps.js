const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");

Given("que eu me cadastro e realizo login", () => {
  const email = Cypress.env("LOGIN_EMAIL");
  const senha = Cypress.env("LOGIN_PASSWORD");

  LoginPage.acessarPaginaDeLogin();
  LoginPage.realizarLogin(email, senha);
  LoginPage.usuarioDeveEstarLogado();
});
