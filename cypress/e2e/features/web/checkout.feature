# language: pt
Funcionalidade: Checkout

  Contexto:
    Dado que eu realizo login com as credenciais do ambiente
    E que estou na página inicial

  Cenário: Produto adicionado ao carrinho deve refletir na tela de pagamento
    Quando eu busco por um produto válido
    E eu adiciono o produto encontrado ao carrinho
    E eu acesso o carrinho
    E eu prossigo para o checkout
    Então o produto deve estar presente na tela de pagamento
