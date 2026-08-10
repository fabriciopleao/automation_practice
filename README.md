# QA Automation Framework — Cypress + Cucumber + Allure

Framework de automação de testes end-to-end (Web e API), estruturado em BDD com Cucumber/Gherkin, Page Objects e relatórios via Allure Report.

## 🧱 Stack

- [Cypress](https://www.cypress.io/) — execução dos testes
- [Cucumber (Gherkin)](https://cucumber.io/) via `@badeball/cypress-cucumber-preprocessor` — escrita de cenários em BDD
- [Allure Report](https://allurereport.org/) via `@shelex/cypress-allure-plugin` — relatórios de execução
- `dotenv` — variáveis de ambiente e credenciais fora do código

## 📁 Estrutura de pastas

```
cypress/
├── e2e/
│   └── features/
│       ├── web/        -> arquivos .feature dos cenários Web
│       └── api/         -> arquivos .feature dos cenários de API
├── steps/
│   ├── web/              -> step definitions dos cenários Web
│   └── api/              -> step definitions dos cenários de API
├── pages/                -> Page Objects (Web)
├── support/
│   ├── e2e.js
│   └── commands.js
├── fixtures/             -> massa de dados de teste
cypress.config.js
.env.example
.gitignore
package.json
```

## ⚙️ Pré-requisitos

- Node.js 18+
- npm 9+
- Java (necessário apenas para gerar/visualizar o relatório Allure via `allure-commandline`)

## 🚀 Instalação

```bash
npm install
```

Em seguida, copie o arquivo de variáveis de ambiente e preencha com os valores necessários:

```bash
cp .env.example .env
```

> Nenhuma credencial deve ser commitada no código. Todas as URLs e credenciais ficam no `.env`, que é ignorado pelo Git.

## ▶️ Execução dos testes

Modo interativo (Test Runner):
```bash
npm run cy:open
```

Modo headless (linha de comando):
```bash
npm run cy:run
```

Executar apenas cenários Web:
```bash
npm run cy:run:web
```

Executar apenas cenários de API:
```bash
npm run cy:run:api
```

## 📊 Relatório Allure

Após a execução, gere e abra o relatório:

```bash
npm run allure:generate
npm run allure:open
```

Ou rode tudo em sequência (testes + geração + abertura do relatório):

```bash
npm run test
```

## 🧩 Convenções do projeto

- Cenários escritos em Gherkin (`.feature`), um arquivo por funcionalidade.
- Nomenclatura de pastas fixa: `features`, `steps`, `pages`.
- Nomes de métodos autoexplicativos — sem comentários no código.
- Sem duplicidade de métodos entre Page Objects.
- Sem credenciais hardcoded — tudo via `.env`.
