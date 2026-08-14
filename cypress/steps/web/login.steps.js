const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");
const {
  obterCredencialInvalidaAleatoria,
} = require("../../support/data/CredenciaisDataProvider");

Given("que estou na página de login", () => {
  LoginPage.acessarPaginaDeLogin();
});

Given("que eu realizo login com as credenciais do ambiente", () => {
  const email = Cypress.env("LOGIN_EMAIL");
  const senha = Cypress.env("LOGIN_PASSWORD");

  LoginPage.acessarPaginaDeLogin();
  LoginPage.realizarLogin(email, senha);
  LoginPage.usuarioDeveEstarLogado();
});

When("eu realizo login com as credenciais do ambiente", () => {
  const email = Cypress.env("LOGIN_EMAIL");
  const senha = Cypress.env("LOGIN_PASSWORD");

  LoginPage.realizarLogin(email, senha);
});

When("eu tento login com uma credencial inválida", () => {
  const credencial = obterCredencialInvalidaAleatoria();
  LoginPage.realizarLogin(credencial.email, credencial.senha);
});

Then("devo estar autenticado no sistema", () => {
  LoginPage.usuarioDeveEstarLogado();
});

Then("devo visualizar uma mensagem de erro de login", () => {
  LoginPage.mensagemDeErroDeveSerExibida();
});
