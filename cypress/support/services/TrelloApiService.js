class TrelloApiService {
  obterUrlBase() {
    return Cypress.env("API_BASE_URL");
  }

  obterCaminhoDaAcao() {
    return Cypress.env("API_ACTION_PATH");
  }

  obterIdAcaoConfigurada() {
    return this.obterCaminhoDaAcao().split("/").filter(Boolean).pop();
  }

  montarUrlDaAcao(id) {
    const urlBase = this.obterUrlBase();
    const caminhoDaAcao = this.obterCaminhoDaAcao();
    const prefixoDaAcao = caminhoDaAcao.replace(/\/[^/]+$/, "");

    return `${urlBase}${prefixoDaAcao}/${id}`;
  }

  consultarAcao() {
    return this.consultarAcaoPorId(this.obterIdAcaoConfigurada());
  }

  consultarAcaoPorId(id) {
    return cy.request({
      method: "GET",
      url: this.montarUrlDaAcao(id),
      headers: {
        Accept: "application/json",
      },
      failOnStatusCode: false,
    });
  }
}

module.exports = new TrelloApiService();
