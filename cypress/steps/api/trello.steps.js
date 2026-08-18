const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TrelloApiService = require("../../support/services/TrelloApiService");
const TrelloDataProvider = require("../../support/data/TrelloDataProvider");

When("consulto uma ação existente no Trello", () => {
  TrelloApiService.consultarAcao().then((resposta) => {
    cy.wrap(resposta).as("respostaAcaoTrello");
  });
});

When("consulto uma ação inexistente no Trello", () => {
  const idAcaoInexistente = TrelloDataProvider.obterIdAcaoInexistente();

  TrelloApiService.consultarAcaoPorId(idAcaoInexistente).then((resposta) => {
    cy.wrap(resposta).as("respostaAcaoInexistente");
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
      expect(acao).to.include.all.keys(
        "id",
        "idMemberCreator",
        "data",
        "type",
        "date"
      );

      expect(acao.id).to.be.a("string").and.not.be.empty;
      expect(acao.idMemberCreator).to.be.a("string").and.not.be.empty;
      expect(acao.type).to.be.a("string").and.not.be.empty;
      expect(acao.date).to.be.a("string").and.not.be.empty;

      expect(acao.data).to.be.an("object");
      expect(acao.data).to.include.all.keys("list", "board", "card");

      expect(acao.data.list).to.be.an("object");
      expect(acao.data.list).to.include.all.keys("id", "name");
      expect(acao.data.list.id).to.be.a("string").and.not.be.empty;
      expect(acao.data.list.name).to.be.a("string").and.not.be.empty;

      expect(acao.data.board).to.be.an("object");
      expect(acao.data.board).to.include.all.keys("id", "name");
      expect(acao.data.board.id).to.be.a("string").and.not.be.empty;
      expect(acao.data.board.name).to.be.a("string").and.not.be.empty;

      expect(acao.data.card).to.be.an("object");
      expect(acao.data.card).to.include.all.keys("id", "name");
      expect(acao.data.card.id).to.be.a("string").and.not.be.empty;
      expect(acao.data.card.name).to.be.a("string").and.not.be.empty;
    });
});

Then("a ação retornada deve corresponder à ação solicitada", () => {
  cy.get("@respostaAcaoTrello")
    .its("body.id")
    .should("eq", TrelloApiService.obterIdAcaoConfigurada());
});

Then(
  "os dados da lista, quadro e cartão devem corresponder à ação consultada",
  () => {
    const acaoEsperada = TrelloDataProvider.obterAcaoEsperada();

    cy.get("@respostaAcaoTrello")
      .its("body.data")
      .then((data) => {
        expect(data.list.name).to.equal(acaoEsperada.lista);
        expect(data.board.name).to.equal(acaoEsperada.quadro);
        expect(data.card.name).to.equal(acaoEsperada.cartao);
      });
  }
);

Then("o tipo da ação deve corresponder ao evento esperado", () => {
  const acaoEsperada = TrelloDataProvider.obterAcaoEsperada();

  cy.get("@respostaAcaoTrello")
    .its("body.type")
    .should("eq", acaoEsperada.tipo);
});

Then("a resposta deve ser retornada em formato JSON", () => {
  cy.get("@respostaAcaoTrello")
    .its("headers.content-type")
    .should("include", "application/json");
});

Then("a API deve informar que a ação não foi encontrada", () => {
  cy.get("@respostaAcaoInexistente").its("status").should("eq", 404);
});
