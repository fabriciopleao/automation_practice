const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor() {
    super();
    this.botaoProdutos = ".shop-menu > .nav > :nth-child(2) > a";
    this.campoBusca = "#search_product";
    this.botaoBuscar = "#submit_search";
  }

  acessarPaginaInicial() {
    this.acessarPagina("/");
  }
  
  acessarMenuDeProdutos() {
    this.clicarElemento(this.botaoProdutos);
  }

  buscarProduto(nomeProduto) {
    this.preencherCampo(this.campoBusca, nomeProduto);
    this.clicarElemento(this.botaoBuscar);
  }
}

module.exports = new HomePage();
