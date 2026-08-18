# language: pt
Funcionalidade: Busca de produtos

  Contexto:
    Dado que estou na página inicial

  Cenário: Buscar por um produto existente
    Quando eu busco por um produto válido
    Então devo visualizar os resultados da busca

  Cenário: Buscar por parte do nome de um produto existente
    Quando eu busco por parte do nome de um produto válido
    Então devo visualizar os resultados da busca

  Cenário: Buscar produto utilizando combinação de letras maiúsculas e minúsculas
    Quando eu busco por um produto válido com letras maiúsculas e minúsculas misturadas
    Então devo visualizar os resultados da busca

  Cenário: Buscar por um produto inexistente
    Quando eu busco por um produto inexistente
    Então nenhum resultado deve ser exibido
