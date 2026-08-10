# language: pt
Funcionalidade: Busca de produto e validação no carrinho

  Contexto:
    Dado que eu me cadastro e realizo login
    E que estou na página inicial

  @focus
  Esquema do Cenário: Buscar produto, adicionar ao carrinho e validar na tela de pagamento
    Quando eu busco pelo produto "<produto>"
    Então devo visualizar os resultados da busca
    Quando eu adiciono o produto "<produto>" ao carrinho
    E eu acesso o carrinho
    Então o produto "<produto>" deve estar presente no carrinho
    Quando eu prossigo para o checkout
    Então o produto "<produto>" deve estar presente na tela de pagamento

    Exemplos:
      | produto |
      | Rose Pink Embroidered Maxi Dress   |
      | Soft Stretch Jeans   |
      | Blue Top     |

  Esquema do Cenário: Buscar produto inexistente e validar que nenhum resultado é exibido
    Dado que estou na página inicial
    Quando eu busco pelo produto "<produtoInexistente>"
    Então nenhum resultado deve ser exibido

    Exemplos:
      | produtoInexistente     |
      | zzzzprodutoinexistente |
      | xyz123naoexiste        |