const produtoValido = "Blue Top";
const termoParcialValido = "Blue";
const produtoValidoComCaseAlternado = "bLuE tOp";
const produtoInexistente = "ProdutoQueNaoExisteNoCatalogo";

function obterProdutoValido() {
  return produtoValido;
}

function obterTermoParcialDeProdutoValido() {
  return termoParcialValido;
}

function obterProdutoValidoComCaseAlternado() {
  return produtoValidoComCaseAlternado;
}

function obterProdutoInexistente() {
  return produtoInexistente;
}

module.exports = {
  obterProdutoValido,
  obterTermoParcialDeProdutoValido,
  obterProdutoValidoComCaseAlternado,
  obterProdutoInexistente,
};
