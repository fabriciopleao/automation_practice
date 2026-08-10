const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductsPage = require("../../pages/ProductsPage");
const CartPage = require("../../pages/CartPage");

When("eu adiciono o produto {string} ao carrinho", (nomeProduto) => {
  ProductsPage.adicionarProdutoAoCarrinhoPeloNome(nomeProduto);
});

When("eu acesso o carrinho", () => {
  ProductsPage.acessarCarrinho();
});

Then("o produto {string} deve estar presente no carrinho", (nomeProduto) => {
  CartPage.validarProdutoNoCarrinho(nomeProduto);
});

When("eu prossigo para o checkout", () => {
  CartPage.prosseguirParaCheckout();
});

Then("o produto {string} deve estar presente na tela de pagamento", (nomeProduto) => {
  CartPage.validarProdutoNaTelaDePagamento(nomeProduto);
});
