# Guia de Contribuição

Este documento define o fluxo utilizado para organizar alterações no projeto.

## Estratégia de branches

O projeto adota GitFlow para separar desenvolvimento, integração e versões estáveis.

| Branch | Finalidade |
|---|---|
| `main` | Versão estável e validada do projeto. |
| `develop` | Integração das alterações da próxima entrega. |

Branches de apoio:

| Tipo | Padrão | Origem | Destino |
|---|---|---|---|
| Feature | `feature/<nome-curto>` | `develop` | `develop` |
| Release | `release/<versao>` | `develop` | `main` e `develop` |
| Hotfix | `hotfix/<nome-curto>` | `main` | `main` e `develop` |

## Fluxo para novas alterações

1. Atualize `develop`:

```bash
git switch develop
git pull origin develop
```

2. Crie uma branch específica:

```bash
git switch -c feature/nome-da-feature
```

3. Implemente e valide a alteração localmente.
4. Faça commits pequenos e objetivos.
5. Envie a branch:

```bash
git push -u origin feature/nome-da-feature
```

6. Abra um Pull Request para `develop`.
7. Faça o merge somente após a conclusão da CI e a análise dos resultados.

Alterações comuns não devem ser desenvolvidas diretamente na `main`.

## Padrão de commits

O projeto utiliza Conventional Commits.

```text
feat: nova funcionalidade
fix: correção de comportamento
test: inclusão ou alteração de testes
refactor: alteração estrutural sem mudança de comportamento
docs: documentação
ci: integração contínua
```

Evite mensagens genéricas como `ajustes`, `correcoes` ou `alteracoes finais`.

## Validação antes do Pull Request

Execute os testes relacionados à alteração:

```bash
npm run cy:run:web
npm run cy:run:api
```

Para a suíte completa:

```bash
npm run cy:run
```

Na CI, indisponibilidade externa do Automation Exercise pode impedir a execução de parte dos cenários Web. Essa condição deve permanecer identificada no resumo do workflow e não deve ser interpretada como aprovação dos testes não executados.

Também confirme que arquivos locais ou gerados não foram adicionados ao commit:

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
- Manter dados sensíveis no `.env` local ou em GitHub Secrets.
- Utilizar `.env.example` somente como referência das variáveis necessárias.
