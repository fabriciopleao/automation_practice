const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../pages/HomePage");
const ProductsPage = require("../../pages/ProductsPage");
const {
  obterProdutoValidoAleatorio,
  obterTermoParcialDeProdutoValido,
  obterProdutoValidoComCaseAleatorio,
  obterProdutoInexistenteAleatorio,
} = require("../../support/data/ProdutosDataProvider");

When("eu busco por um produto válido", () => {
  const produto = obterProdutoValidoAleatorio();
  cy.wrap(produto).as("produtoBuscado");
  cy.wrap(produto).as("termoBusca");
  HomePage.acessarMenuDeProdutos();
  HomePage.buscarProduto(produto);
});

When("eu busco por parte do nome de um produto válido", () => {
  const termo = obterTermoParcialDeProdutoValido();
  cy.wrap(termo).as("termoBusca");
  HomePage.acessarMenuDeProdutos();
  HomePage.buscarProduto(termo);
});

When("eu busco por um produto válido com letras maiúsculas e minúsculas misturadas", () => {
  const produto = obterProdutoValidoComCaseAleatorio();
  cy.wrap(produto).as("termoBusca");
  HomePage.acessarMenuDeProdutos();
  HomePage.buscarProduto(produto);
});

When("eu busco por um produto inexistente", () => {
  const produto = obterProdutoInexistenteAleatorio();
  cy.wrap(produto).as("termoBusca");
  HomePage.acessarMenuDeProdutos();
  HomePage.buscarProduto(produto);
});

Then("devo visualizar os resultados da busca", () => {
  ProductsPage.resultadosDaBuscaDevemSerExibidos();
  ProductsPage.obterQuantidadeResultadosBusca().should("be.greaterThan", 0);

  cy.get("@termoBusca").then((termoBusca) => {
    ProductsPage.validarResultadosRelacionadosAoTermo(termoBusca);
  });
});

Then("nenhum resultado deve ser exibido", () => {
  ProductsPage.nenhumResultadoDeveSerExibido();
});
