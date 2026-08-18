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

  validarTextoNormalizado(seletor, valorEsperado) {
    cy.get(seletor)
      .invoke("text")
      .then((texto) => {
        expect(texto.trim()).to.eq(valorEsperado);
      });
  }

  validarProdutoNaTelaDePagamento(dadosCarrinho) {
    cy.contains(this.linhaItem, dadosCarrinho.nome).within(() => {
      this.validarTextoNormalizado(this.nomeItem, dadosCarrinho.nome);
      this.validarTextoNormalizado(this.precoItem, dadosCarrinho.preco);
      this.validarTextoNormalizado(
        this.quantidadeItem,
        dadosCarrinho.quantidade
      );
      this.validarTextoNormalizado(this.totalItem, dadosCarrinho.total);
    });
  }
}

module.exports = new CheckoutPage();
