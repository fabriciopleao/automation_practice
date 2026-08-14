const BasePage = require("./BasePage");

class CheckoutPage extends BasePage {
  constructor() {
    super();
    this.linhaItem = "#cart_info tbody tr";
    this.nomeItem = ".cart_description h4 a";
    this.precoItem = ".cart_price p";
    this.quantidadeItem = ".cart_quantity button";
    this.totalItem = ".cart_total_price";
  }

  validarProdutoNaTelaDePagamento(nomeProduto, dadosCarrinho) {
    cy.contains(this.linhaItem, nomeProduto).within(() => {
      cy.get(this.nomeItem).should("contain.text", nomeProduto);
      cy.get(this.precoItem).should("contain.text", dadosCarrinho.preco);
      cy.get(this.quantidadeItem).should("contain.text", dadosCarrinho.quantidade);
      cy.get(this.totalItem).should("contain.text", dadosCarrinho.total);
    });
  }
}

module.exports = new CheckoutPage();
