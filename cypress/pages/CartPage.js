const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor() {
    super();
    this.linhaItem = "#cart_info tbody tr";
    this.nomeItemCarrinho = ".cart_description h4 a";
    this.precoItemCarrinho = ".cart_price p";
    this.quantidadeItemCarrinho = ".cart_quantity button";
    this.totalItemCarrinho = ".cart_total_price";
    this.botaoRemoverItem = ".cart_quantity_delete";
    this.botaoProsseguirParaCheckout = "a:contains('Proceed To Checkout')";
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.contains(this.linhaItem, nomeProduto)
      .find(this.nomeItemCarrinho)
      .should("contain.text", nomeProduto);
  }

  obterDadosDoProdutoNoCarrinho(nomeProduto) {
    return cy.contains(this.linhaItem, nomeProduto).then(($linha) => ({
      nome: nomeProduto,
      preco: $linha.find(this.precoItemCarrinho).text().trim(),
      quantidade: $linha.find(this.quantidadeItemCarrinho).text().trim(),
      total: $linha.find(this.totalItemCarrinho).text().trim(),
    }));
  }

  removerProdutoDoCarrinho(nomeProduto) {
    cy.contains(this.linhaItem, nomeProduto)
      .should("have.length", 1)
      .within(() => {
        cy.get(this.botaoRemoverItem).should("have.length", 1).click();
      });
  }

  validarProdutoAusenteDoCarrinho(nomeProduto) {
    cy.contains(this.linhaItem, nomeProduto).should("not.exist");
  }

  prosseguirParaCheckout() {
    this.clicarElemento(this.botaoProsseguirParaCheckout);
  }
}

module.exports = new CartPage();
