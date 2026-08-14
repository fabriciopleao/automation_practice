function obterCredencialValidaDoAmbiente() {
  const email = Cypress.env("LOGIN_EMAIL");
  const senha = Cypress.env("LOGIN_PASSWORD");

  if (!email || !senha) {
    throw new Error(
      "As variáveis LOGIN_EMAIL e LOGIN_PASSWORD devem estar configuradas."
    );
  }

  return { email, senha };
}

function obterCredencialInvalidaAleatoria() {
  const identificador = `${Date.now()}${Math.floor(Math.random() * 10000)}`;

  return {
    email: `usuario.invalido.${identificador}@exemplo.test`,
    senha: `senhaInvalida${identificador}`,
  };
}

module.exports = {
  obterCredencialValidaDoAmbiente,
  obterCredencialInvalidaAleatoria,
};
