class BasePage {
  acessarPagina(caminho = "/") {
    cy.visit(caminho);
  }

  clicarElemento(seletor) {
    cy.get(seletor).should("be.visible").click();
  }

  preencherCampo(seletor, texto) {
    cy.get(seletor).should("be.visible").clear().type(texto);
  }

  elementoDeveEstarVisivel(seletor) {
    cy.get(seletor).should("be.visible");
  }

  elementoDeveConterTexto(seletor, texto) {
    cy.get(seletor).should("contain.text", texto);
  }

  obterQuantidadeElementos(seletor) {
    return cy.get(seletor).its("length");
  }
}

module.exports = BasePage;
