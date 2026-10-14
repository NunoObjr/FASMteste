# FASM Teste

Aplicação web em **React** criada como **teste técnico**, com duas telas: um **formulário de cadastro** (CNPJ, CPF, CEP, razão social, nome e endereço) com validação no cliente e uma **listagem de cervejarias** que consome a API pública [Open Brewery DB](https://www.openbrewerydb.org/), exibindo identificador, nome, cidade e país de cada item.

## Funcionalidades

- Página inicial (`/`) com formulário de cadastro: valida tamanho e formato de CNPJ (11 dígitos numéricos), CPF (11) e CEP (8), guarda os valores no `localStorage` e dá acesso à lista
- Página `/lista`: busca paginada em `GET /breweries?page=25` e renderização dos resultados
- Cliente HTTP centralizado, preparado para anexar um **token de autenticação** às requisições

## Conceitos técnicos

**Cliente HTTP com interceptor (Axios).** `services/api.js` cria uma instância com `baseURL` fixa e um *request interceptor* que adiciona o cabeçalho `Authorization: Bearer <token>` quando existe token salvo.

**Autenticação no cliente.** `services/auth.js` guarda, lê e remove o token no `localStorage` e expõe `isAuthenticated()` — base para proteger rotas privadas.

**Roteamento SPA.** `react-router-dom` com `BrowserRouter`, `Switch` e `Route`.

**Componente de classe com ciclo de vida.** A lista é carregada em `componentDidMount` e guardada no `state`.

## Stack

React 16 · React Router 5 · Axios · Formik · Create React App (`react-scripts` 3.3)

## Estrutura

```
src/
  index.js
  routes.js
  pages/
    index.js        # formulário de cadastro com validações
    lista.js        # listagem de cervejarias
  services/
    api.js          # Axios + interceptor de autenticação
    auth.js         # token no localStorage
```

## Como executar

```bash
yarn install      # ou npm install
yarn start        # http://localhost:3000
yarn test
yarn build
```

## API utilizada

[Open Brewery DB](https://www.openbrewerydb.org/) — pública, sem necessidade de chave.
