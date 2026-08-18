# language: pt
Funcionalidade: Login

  Cenário: Login com credenciais válidas
    Dado que estou na página de login
    Quando eu realizo login com as credenciais do ambiente
    Então devo estar autenticado no sistema

  Cenário: Tentativa de login com credenciais inválidas
    Dado que estou na página de login
    Quando eu tento login com uma credencial inválida
    Então devo visualizar uma mensagem de erro de login
