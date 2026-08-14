class TrelloApiService {
  consultarAcao() {
    const urlBase = Cypress.env("API_BASE_URL");
    const caminhoDaAcao = Cypress.env("API_ACTION_PATH");

    return cy.request({
      method: "GET",
      url: `${urlBase}${caminhoDaAcao}`,
      headers: {
        Accept: "application/json",
      },
      failOnStatusCode: false,
    });
  }
}

module.exports = new TrelloApiService();
