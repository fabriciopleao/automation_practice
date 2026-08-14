const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const CartPage = require("../../pages/CartPage");
const CheckoutPage = require("../../pages/CheckoutPage");

When("eu prossigo para o checkout", () => {
  cy.get("@produtoBuscado").then((produto) => {
    CartPage.obterDadosDoProdutoNoCarrinho(produto).then((dadosProduto) => {
      cy.wrap(dadosProduto).as("dadosProdutoCarrinho");
    });
  });

  CartPage.prosseguirParaCheckout();
});

Then("o produto deve estar presente na tela de pagamento", () => {
  cy.get("@produtoBuscado").then((produto) => {
    cy.get("@dadosProdutoCarrinho").then((dadosProduto) => {
      CheckoutPage.validarProdutoNaTelaDePagamento(produto, dadosProduto);
    });
  });
});
