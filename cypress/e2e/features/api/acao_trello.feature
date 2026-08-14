# language: pt
@api
Funcionalidade: Consulta de ação no Trello

  @smoke
  Cenário: Consultar os dados de uma ação existente
    Quando consulto uma ação existente no Trello
    Então a consulta deve ser realizada com sucesso
    E o nome da lista relacionada à ação deve ser exibido

  @contrato
  Cenário: Validar o contrato da ação consultada
    Quando consulto uma ação existente no Trello
    Então a consulta deve ser realizada com sucesso
    E a resposta deve respeitar o contrato esperado da ação
