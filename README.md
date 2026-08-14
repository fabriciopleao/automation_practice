# QA Automation Framework

Framework de automação de testes Web e API desenvolvido em JavaScript com Cypress, Cucumber/Gherkin e Allure Report.

O projeto foi estruturado para demonstrar cobertura de testes, organização de código, separação de responsabilidades, segurança de configurações e execução automatizada em CI.

## Tecnologias

- JavaScript
- Cypress
- Cucumber / Gherkin
- Page Object
- Service Object
- Allure Report
- dotenv
- GitHub Actions
- Git / GitFlow

## Arquitetura

```text
Web: Feature -> Steps -> Page Object -> Aplicação Web
API: Feature -> Steps -> Service Object -> API
```

Principais responsabilidades:

- `features`: cenários escritos em linguagem de negócio.
- `steps`: ligação entre Gherkin e implementação.
- `pages`: interações e validações da interface Web.
- `support/services`: chamadas e configurações da API.
- `support/data`: geração e fornecimento de massa de testes.

## Estrutura do projeto

```text
.github/workflows/
└── ci.yml

cypress/
├── e2e/features/
│   ├── web/
│   └── api/
├── steps/
│   ├── web/
│   └── api/
├── pages/
└── support/
    ├── data/
    ├── services/
    ├── commands.js
    └── e2e.js

.env.example
cypress.config.js
CONTRIBUTING.md
package.json
```

## Pré-requisitos

- Node.js 18+
- npm 9+
- Java, necessário para gerar e visualizar relatórios Allure

## Configuração rápida

1. Instale as dependências:

```bash
npm ci
```

2. Crie o arquivo local de variáveis de ambiente:

macOS / Linux:

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Preencha as credenciais Web no `.env`:

```env
BASE_URL=https://www.automationexercise.com
LOGIN_EMAIL=
LOGIN_PASSWORD=

API_BASE_URL=https://api.trello.com
API_ACTION_PATH=/1/actions/592f11060f95a3d3d46a987a
```

O arquivo `.env` não deve ser versionado. O `.env.example` permanece no repositório apenas como referência de configuração.

## Execução dos testes

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar toda a suíte:

```bash
npm run cy:run
```

Executar somente Web:

```bash
npm run cy:run:web
```

Executar somente API:

```bash
npm run cy:run:api
```

## Cobertura Web

A automação utiliza o site Automation Exercise e cobre:

- login válido e inválido;
- busca por produto existente, parcial, com variação de letras e inexistente;
- inclusão e remoção de produto no carrinho;
- validação de produto no carrinho;
- comparação de nome, preço, quantidade e total no checkout.

## Cobertura API

A automação utiliza o endpoint público do Trello:

```text
GET https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

Validações implementadas:

- status HTTP `200`;
- leitura e exibição de `data.list.name`;
- presença e tipo dos campos essenciais da resposta;
- contrato estrutural mínimo da ação e de `data.list`.

As chamadas ficam centralizadas em `TrelloApiService`, mantendo `cy.request()` fora dos step definitions.

## Relatório Allure

Gerar o relatório:

```bash
npm run allure:generate
```

Abrir o relatório:

```bash
npm run allure:open
```

## Integração Contínua

O workflow está em:

```text
.github/workflows/ci.yml
```

A esteira é executada automaticamente em pushes e Pull Requests direcionados às branches `develop` e `main`.

Na CI, as credenciais Web devem ser cadastradas como GitHub Secrets:

- `LOGIN_EMAIL`
- `LOGIN_PASSWORD`

As configurações públicas de URL podem permanecer definidas no workflow.

## Contribuição

O fluxo de branches, padrão de commits e regras de Pull Request estão documentados em [CONTRIBUTING.md](./CONTRIBUTING.md).
