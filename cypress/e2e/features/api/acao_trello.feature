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

  @dados
  Cenário: Validar a identificação da ação consultada
    Quando consulto uma ação existente no Trello
    Então a ação retornada deve corresponder à ação solicitada

  @dados
  Cenário: Validar os dados relacionados à ação
    Quando consulto uma ação existente no Trello
    Então os dados da lista, quadro e cartão devem corresponder à ação consultada

  @dados
  Cenário: Validar o tipo da ação consultada
    Quando consulto uma ação existente no Trello
    Então o tipo da ação deve corresponder ao evento esperado

  @headers
  Cenário: Validar o formato da resposta da ação
    Quando consulto uma ação existente no Trello
    Então a consulta deve ser realizada com sucesso
    E a resposta deve ser retornada em formato JSON

  @negativo
  Cenário: Consultar uma ação inexistente
    Quando consulto uma ação inexistente no Trello
    Então a API deve informar que a ação não foi encontrada
