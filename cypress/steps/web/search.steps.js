const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../pages/HomePage");
const ProductsPage = require("../../pages/ProductsPage");

Given("que estou na página inicial", () => {
  HomePage.acessarPaginaInicial();
});

When("eu busco pelo produto {string}", (nomeProduto) => {
  HomePage.acessarMenuDeProdutos();
  HomePage.buscarProduto(nomeProduto);
});

Then("devo visualizar os resultados da busca", () => {
  ProductsPage.resultadosDaBuscaDevemSerExibidos();
  ProductsPage.obterQuantidadeResultadosBusca().should("be.greaterThan", 0);
});
