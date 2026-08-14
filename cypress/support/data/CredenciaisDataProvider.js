function obterCredencialInvalidaAleatoria() {
  const identificador = `${Date.now()}${Math.floor(Math.random() * 10000)}`;

  return {
    email: `usuario.invalido.${identificador}@exemplo.test`,
    senha: `senhaInvalida${identificador}`,
  };
}

module.exports = { obterCredencialInvalidaAleatoria };
