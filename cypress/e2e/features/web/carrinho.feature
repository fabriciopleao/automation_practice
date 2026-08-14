# language: pt
Funcionalidade: Carrinho de compras

  Contexto:
    Dado que estou na página inicial

  Cenário: Adicionar um produto ao carrinho
    Quando eu busco por um produto válido
    E eu adiciono o produto encontrado ao carrinho
    E eu acesso o carrinho
    Então o produto deve estar presente no carrinho

  Cenário: Remover produto do carrinho
    Quando eu busco por um produto válido
    E eu adiciono o produto encontrado ao carrinho
    E eu acesso o carrinho
    E eu removo o produto do carrinho
    Então o produto removido não deve estar presente no carrinho
