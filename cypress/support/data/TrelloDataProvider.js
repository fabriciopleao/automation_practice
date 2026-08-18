const acaoEsperada = Object.freeze({
  lista: "Professional",
  quadro: "Life Goals",
  cartao: "Increase revenue by 10%",
  tipo: "updateCard",
});

const idAcaoInexistente = "000000000000000000000000";

function obterAcaoEsperada() {
  return acaoEsperada;
}

function obterIdAcaoInexistente() {
  return idAcaoInexistente;
}

module.exports = {
  obterAcaoEsperada,
  obterIdAcaoInexistente,
};
