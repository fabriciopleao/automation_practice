const BasePage = require("./BasePage");

class ProductsPage extends BasePage {
  constructor() {
    super();
    this.tituloResultadosBusca = ".title.text-center";
    this.itemProduto = ".product-image-wrapper";
    this.nomeProduto = ".productinfo p";
    this.botaoContinuarComprando = "button:contains('Continue Shopping')";
    this.linkVerCarrinho = ".shop-menu a[href='/view_cart']";
    this.botaoAdicionarAoCarrinho = ".productinfo a.add-to-cart";
  }

  resultadosDaBuscaDevemSerExibidos() {
    this.elementoDeveConterTexto(this.tituloResultadosBusca, "Searched Products");
  }

  obterQuantidadeResultadosBusca() {
    return this.obterQuantidadeElementos(this.itemProduto);
  }

  validarResultadosRelacionadosAoTermo(termoBusca) {
    const termoNormalizado = termoBusca.trim().toLowerCase();

    cy.get(`${this.itemProduto} ${this.nomeProduto}`)
      .should("have.length.greaterThan", 0)
      .each(($produto) => {
        const nomeNormalizado = $produto.text().trim().toLowerCase();
        expect(nomeNormalizado).to.include(termoNormalizado);
      });
  }

  nenhumResultadoDeveSerExibido() {
    this.elementoDeveConterTexto(this.tituloResultadosBusca, "Searched Products");
    cy.get(this.itemProduto).should("not.exist");
  }

  adicionarProdutoAoCarrinhoPeloNome(nomeProduto) {
    cy.contains(this.itemProduto, nomeProduto).within(() => {
      cy.get(this.botaoAdicionarAoCarrinho).click();
    });

    this.clicarElemento(this.botaoContinuarComprando);
  }

  acessarCarrinho() {
    this.clicarElemento(this.linkVerCarrinho);
  }
}

module.exports = new ProductsPage();
