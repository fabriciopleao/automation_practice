const produtosValidos = [
  "Blue Top",
  "Men Tshirt",
  "Sleeveless Dress",
  "Stylish Dress",
  "Winter Top",
];

const produtosInexistentes = [
  "zzzzprodutoinexistente",
  "xyz123naoexiste",
  "ProdutoQueNaoExisteNoCatalogo",
];

function obterProdutoValidoAleatorio() {
  const indice = Math.floor(Math.random() * produtosValidos.length);
  return produtosValidos[indice];
}

function obterTermoParcialDeProdutoValido() {
  const produto = obterProdutoValidoAleatorio();
  return produto.split(" ")[0];
}

function obterProdutoValidoComCaseAleatorio() {
  const produto = obterProdutoValidoAleatorio();
  return produto
    .split("")
    .map((caractere, indice) =>
      indice % 2 === 0 ? caractere.toUpperCase() : caractere.toLowerCase()
    )
    .join("");
}

function obterProdutoInexistenteAleatorio() {
  const indice = Math.floor(Math.random() * produtosInexistentes.length);
  return produtosInexistentes[indice];
}

module.exports = {
  obterProdutoValidoAleatorio,
  obterTermoParcialDeProdutoValido,
  obterProdutoValidoComCaseAleatorio,
  obterProdutoInexistenteAleatorio,
};
