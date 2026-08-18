const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor() {
    super();
    this.campoEmailLogin = "input[data-qa='login-email']";
    this.campoSenhaLogin = "input[data-qa='login-password']";
    this.botaoLogin = "button[data-qa='login-button']";
    this.indicadorUsuarioLogado = "a:contains(' Logged in as')";
    this.mensagemErroLogin = ".login-form p";
  }

  acessarPaginaDeLogin() {
    this.acessarPagina("/login");
  }

  realizarLogin(email, senha) {
    this.preencherCampo(this.campoEmailLogin, email);
    this.preencherCampo(this.campoSenhaLogin, senha);
    this.clicarElemento(this.botaoLogin);
  }

  usuarioDeveEstarLogado() {
    this.elementoDeveEstarVisivel(this.indicadorUsuarioLogado);
  }

  mensagemDeErroDeveSerExibida() {
    this.elementoDeveConterTexto(this.mensagemErroLogin, "incorrect");
  }
}

module.exports = new LoginPage();
