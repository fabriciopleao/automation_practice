# QA Automation Framework

Framework de automação Web e API em JavaScript com Cypress, Cucumber/Gherkin e Allure Report.

## Tecnologias

- JavaScript
- Cypress
- Cucumber / Gherkin
- Page Object e Service Object
- Allure Report
- dotenv
- GitHub Actions
- Git / GitFlow

## Arquitetura

```text
Web: Feature -> Steps -> Page Object -> Aplicação Web
API: Feature -> Steps -> Service Object -> API
```

```text
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
    └── e2e.js
```

## Pré-requisitos

- Node.js 22 LTS
- npm
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

O `.env` é local e não deve ser versionado. O `.env.example` contém somente a referência das variáveis necessárias.

## Execução

```bash
npm run cy:open
npm run cy:run
npm run cy:run:web
npm run cy:run:api
```

## Cobertura

Web:

- login válido e inválido;
- busca por produto existente, parcial, com variação de letras e inexistente;
- inclusão e remoção de produto no carrinho;
- comparação de nome, preço, quantidade e total no checkout.

API Trello:

- status HTTP `200`;
- leitura e exibição de `data.list.name`;
- validação do contrato estrutural mínimo da resposta.

As chamadas da API ficam centralizadas em `TrelloApiService`.

## Allure Report

```bash
npm run allure:generate
npm run allure:open
```

## Integração Contínua

O workflow `.github/workflows/ci.yml` separa a execução em jobs de API, Web público e Web autenticado.

Os testes Web verificam primeiro a disponibilidade do Automation Exercise. Quando o ambiente externo bloqueia o runner do GitHub Actions, por exemplo com HTTP `403`, os cenários afetados são registrados como **não executados por indisponibilidade externa**, e não como testes aprovados.

Os cenários autenticados utilizam os GitHub Secrets:

- `LOGIN_EMAIL`
- `LOGIN_PASSWORD`

Em pushes para `main`, os resultados Allure disponíveis são consolidados e publicados no GitHub Pages.

## Contribuição

Fluxo de branches, commits e Pull Requests: [CONTRIBUTING.md](./CONTRIBUTING.md).
