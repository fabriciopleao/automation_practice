const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor() {
    super();
    this.descricaoItemCarrinho = ".cart_description";
    this.nomeItemCarrinho = ".cart_description h4 a";
    this.botaoProsseguirParaCheckout = "a:contains('Proceed To Checkout')";
    this.nomeItemNoCheckout = "#cart_info .cart_description h4 a";
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.get(this.nomeItemCarrinho).should("contain.text", nomeProduto);
  }

  obterQuantidadeItensCarrinho() {
    return this.obterQuantidadeElementos(this.descricaoItemCarrinho);
  }

  prosseguirParaCheckout() {
    this.clicarElemento(this.botaoProsseguirParaCheckout);
  }

  validarProdutoNaTelaDePagamento(nomeProduto) {
    cy.get(this.nomeItemNoCheckout).should("contain.text", nomeProduto);
  }
}

module.exports = new CartPage();
