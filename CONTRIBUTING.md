# Guia de Contribuição

Este documento define o fluxo utilizado para organizar novas alterações no projeto.

## Estratégia de branches

O projeto adota GitFlow para separar desenvolvimento, integração e versões estáveis.

| Branch | Finalidade |
|---|---|
| `main` | Versão estável e validada do projeto. |
| `develop` | Integração das alterações que serão preparadas para a próxima entrega. |

Branches de apoio:

| Tipo | Padrão | Origem | Destino |
|---|---|---|---|
| Feature | `feature/<nome-curto>` | `develop` | `develop` |
| Release | `release/<versao>` | `develop` | `main` e `develop` |
| Hotfix | `hotfix/<nome-curto>` | `main` | `main` e `develop` |

Exemplos:

```text
feature/api-trello
feature/web-carrinho
feature/github-actions
release/1.1.0
hotfix/corrige-login
```

## Fluxo para novas alterações

1. Atualize a branch `develop`:

```bash
git switch develop
git pull origin develop
```

2. Crie uma branch específica para a alteração:

```bash
git switch -c feature/nome-da-feature
```

3. Implemente e valide a mudança localmente.

4. Faça commits pequenos e com objetivo claro.

5. Envie a branch para o repositório remoto:

```bash
git push -u origin feature/nome-da-feature
```

6. Abra um Pull Request da branch de feature para `develop`.

7. Faça o merge somente após a execução da CI estar concluída com sucesso.

Alterações comuns não devem ser desenvolvidas diretamente na `main`.

## Padrão de commits

O projeto utiliza Conventional Commits.

Formatos mais utilizados:

```text
feat: nova funcionalidade
fix: correção de comportamento
test: inclusão ou alteração de testes
refactor: alteração estrutural sem mudança de comportamento
docs: documentação
ci: configuração de integração contínua
```

Exemplos:

```text
feat: implementa service object do Trello
test: adiciona validacao de contrato da API
fix: corrige remocao de produto no carrinho
refactor: centraliza massa de dados em providers
ci: configura execucao dos testes no GitHub Actions
docs: atualiza instrucoes de execucao
```

## Pull Requests

Cada Pull Request deve:

- ter título objetivo e relacionado à alteração;
- explicar resumidamente o que foi modificado;
- informar os cenários impactados quando aplicável;
- estar direcionado para a branch correta;
- passar pela esteira de CI antes do merge.

Evite títulos genéricos como `ajustes`, `correcoes` ou `alteracoes finais`.

## Validação antes do Pull Request

Antes de abrir o PR, execute os testes relacionados à alteração.

Web:

```bash
npm run cy:run:web
```

API:

```bash
npm run cy:run:api
```

Suíte completa:

```bash
npm run cy:run
```

Também confirme que arquivos locais ou gerados não foram adicionados ao commit, especialmente:

```text
.env
node_modules/
allure-results/
allure-report/
cypress/screenshots/
cypress/videos/
cypress/downloads/
```

## Segurança

- Não versionar credenciais, tokens ou senhas.
- Manter dados sensíveis apenas no `.env` local ou em GitHub Secrets.
- Utilizar `.env.example` somente como referência das variáveis necessárias.
