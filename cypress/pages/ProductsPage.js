const BasePage = require("./BasePage");

class ProductsPage extends BasePage {
  constructor() {
    super();
    this.tituloResultadosBusca = ".title.text-center";
    this.itemProduto = ".product-image-wrapper";
    this.botaoContinuarComprando = "button:contains('Continue Shopping')";
    this.linkVerCarrinho = "a[href='/view_cart']";
    this.botaoAdicionarAoCarrinho = ":nth-child(5) > .btn";
    this.botaoVisualizarProduto = ".choose > .nav > li > a";
  }

  resultadosDaBuscaDevemSerExibidos() {
    this.elementoDeveEstarVisivel(this.tituloResultadosBusca);
  }

  obterQuantidadeResultadosBusca() {
    return this.obterQuantidadeElementos(this.itemProduto);
  }

  adicionarProdutoAoCarrinhoPeloNome(nomeProduto) {
    cy.contains(".product-image-wrapper", nomeProduto).within(() => {
      cy.get(this.botaoVisualizarProduto).click();
      cy.get(this.botaoAdicionarAoCarrinho).click();
    });
    this.clicarElemento(this.botaoContinuarComprando);
  }

  acessarCarrinho() {
    this.clicarElemento(this.linkVerCarrinho);
  }
}

module.exports = new ProductsPage();
