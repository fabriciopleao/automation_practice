const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductsPage = require("../../pages/ProductsPage");
const CartPage = require("../../pages/CartPage");

When("eu adiciono o produto encontrado ao carrinho", () => {
  cy.get("@produtoBuscado").then((produto) => {
    ProductsPage.adicionarProdutoAoCarrinhoPeloNome(produto);
  });
});

When("eu acesso o carrinho", () => {
  ProductsPage.acessarCarrinho();
});

Then("o produto deve estar presente no carrinho", () => {
  cy.get("@produtoBuscado").then((produto) => {
    CartPage.validarProdutoNoCarrinho(produto);
  });
});

When("eu removo o produto do carrinho", () => {
  cy.get("@produtoBuscado").then((produto) => {
    CartPage.removerProdutoDoCarrinho(produto);
  });
});

Then("o produto removido não deve estar presente no carrinho", () => {
  cy.get("@produtoBuscado").then((produto) => {
    CartPage.validarProdutoAusenteDoCarrinho(produto);
  });
});
