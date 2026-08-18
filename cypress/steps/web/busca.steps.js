const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../pages/HomePage");
const ProductsPage = require("../../pages/ProductsPage");
const {
  obterProdutoValido,
  obterTermoParcialDeProdutoValido,
  obterProdutoValidoComCaseAlternado,
  obterProdutoInexistente,
} = require("../../support/data/ProdutosDataProvider");

function acessarProdutosEBuscar(termoBusca) {
  HomePage.acessarMenuDeProdutos();
  ProductsPage.buscarProduto(termoBusca);
}

When("eu busco por um produto válido", () => {
  const produto = obterProdutoValido();
  cy.wrap(produto).as("produtoBuscado");
  cy.wrap(produto).as("termoBusca");
  acessarProdutosEBuscar(produto);
});

When("eu busco por parte do nome de um produto válido", () => {
  const termo = obterTermoParcialDeProdutoValido();
  cy.wrap(termo).as("termoBusca");
  acessarProdutosEBuscar(termo);
});

When("eu busco por um produto válido com letras maiúsculas e minúsculas misturadas", () => {
  const produto = obterProdutoValidoComCaseAlternado();
  cy.wrap(produto).as("termoBusca");
  acessarProdutosEBuscar(produto);
});

When("eu busco por um produto inexistente", () => {
  const produto = obterProdutoInexistente();
  cy.wrap(produto).as("termoBusca");
  acessarProdutosEBuscar(produto);
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
