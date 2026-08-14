const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor() {
    super();
    this.botaoProdutos = ".shop-menu a[href='/products']";
  }

  acessarPaginaInicial() {
    this.acessarPagina("/");
  }

  acessarMenuDeProdutos() {
    this.clicarElemento(this.botaoProdutos);
  }
}

module.exports = new HomePage();
