const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TrelloApiService = require("../../support/services/TrelloApiService");

When("consulto uma ação existente no Trello", () => {
  TrelloApiService.consultarAcao().then((resposta) => {
    cy.wrap(resposta).as("respostaAcaoTrello");
  });
});

Then("a consulta deve ser realizada com sucesso", () => {
  cy.get("@respostaAcaoTrello").its("status").should("eq", 200);
});

Then("o nome da lista relacionada à ação deve ser exibido", () => {
  cy.get("@respostaAcaoTrello")
    .its("body.data.list.name")
    .should("be.a", "string")
    .and("not.be.empty")
    .then((nomeDaLista) => {
      cy.task("exibirResultado", `Nome da lista: ${nomeDaLista}`);
    });
});

Then("a resposta deve respeitar o contrato esperado da ação", () => {
  cy.get("@respostaAcaoTrello")
    .its("body")
    .then((acao) => {
      expect(acao).to.be.an("object");
      expect(acao).to.include.all.keys("id", "data", "type", "date");
      expect(acao.id).to.be.a("string").and.not.be.empty;
      expect(acao.type).to.be.a("string").and.not.be.empty;
      expect(acao.date).to.be.a("string").and.not.be.empty;

      expect(acao.data).to.be.an("object");
      expect(acao.data).to.have.property("list");
      expect(acao.data.list).to.be.an("object");
      expect(acao.data.list).to.include.all.keys("id", "name");
      expect(acao.data.list.id).to.be.a("string").and.not.be.empty;
      expect(acao.data.list.name).to.be.a("string").and.not.be.empty;
    });
});
