# 💻 Desafio QA Automation

Repositório de automação de testes utilizando Cypress para o desafio de QA.
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

---

**application under test:** Site Serverest 

> ## :goal_net: Goals
- Automação de 5 cenários de teste criados durante a realização do test plan anexado na pasta "docs"   
- Aplicação da arquitetura de testes Page Object Model
- Automação para os endpoints de listagem de produtos e cadastro de produtos para a api indicada no test plan

## 🚀 Como Executar os Testes Automatizados

Este projeto utiliza o [Cypress](https://www.cypress.io/) para testes automatizados de API. Siga as etapas abaixo para configurar e executar os testes em sua máquina local.

### ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)

### 📦 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/FabioNandes/Desafio-QA-Automation.git
   cd Desafio-QA-Automation


2. Instale as dependências do projeto:

```bash
npm install
```
## 🧪 Executando os Testes

### 🔵 Modo Interativo (com interface gráfica)

Para abrir o Cypress Test Runner:

```bash
npx cypress open
```
- A interface será aberta.
- Escolha um dos arquivos de teste para executar

### ⚙️ Modo Headless (linha de comando)
Para executar todos os testes diretamente no terminal

```bash
npx cypres run
```
- Os testes serão executados em modo headless
- Resultados aparecem no terminal 


## 📁 Estrutura do Projeto
Desafio-QA-Automation/
.
├── cypress/
│   ├── downloads/
│   ├── e2e/        #Testes separados em API e testes de UI
│   │   ├── api/
│   │   │   ├── cadastraProduto.cy.js
│   │   │   └── listaProdutos.cy.js
│   │   └── gui/
│   │       ├── cadastroProduto.cy.js
│   │       ├── cadastroUsuario.cy.js
│   │       ├── listaDeProdutos.cy.js
│   │       └── login.cy.js
│   ├── fixtures/
│   ├── support/    #Comandos personalizados para a API e UI
│   │   ├── api_commands.js
│   │   ├── e2e.js
│   │   └── gui_commands.js
├── docs/
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package-lock.json 
├── package.json    #Dependências
└── README.md



#### :diamond_shape_with_a_dot_inside: Extensões recomendadas para o VS Code
- [VS Code](https://code.visualstudio.com/download) 
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 
    - [Add Only](https://marketplace.visualstudio.com/items?itemName=ub1que.add-only) 
    - [Mocha snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets)

