# Project Champions League API

Uma API RESTful desenvolvida com Node.js e Express.js em TypeScript, projetada para gerenciar dados de clubes de futebol, possivelmente no contexto da Champions League. Esta API serve como um backend para uma aplicação frontend que necessita de informações sobre clubes.

## 🚀 Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript.
*   **Express.js**: Framework web para Node.js, utilizado para construir a API.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e escalabilidade do código.
*   **CORS (Cross-Origin Resource Sharing)**: Middleware para Express.js que permite controlar quais origens podem acessar os recursos da API.
*   **dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.
*   **JSON**: Utilizado como formato de armazenamento de dados para os clubes (simulando um banco de dados simples).

## ✨ Funcionalidades

*   **Listar Clubes**: Endpoint para obter todos os clubes cadastrados.
*   **Configuração CORS**: Permite o acesso à API de origens específicas (ex: `http://127.0.0.1:5500`).
*   **Estrutura de Projeto**: Organização em camadas (controllers, services, repositories) para melhor separação de responsabilidades.

## 📦 Instalação

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

*   Node.js (versão 14 ou superior recomendada)
*   npm (gerenciador de pacotes do Node.js) ou Yarn

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/project-champions-league.git
cd project-champions-league
```

### 2. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
# .env
PORT=3000
```

*   `PORT`: A porta em que o servidor da API será executado. (O padrão é `3000` se não for definido).

### 4. Configurar o Arquivo de Dados (Opcional)

Se você estiver usando um arquivo JSON para armazenar os dados dos clubes (ex: `src/database/clubs.json`), certifique-se de que ele exista e esteja no formato correto (pode ser um array vazio `[]` inicialmente).

## ▶️ Como Rodar

Para iniciar o servidor de desenvolvimento:

```bash
npm run start:dev
# ou
npm run start:watch
```

O servidor estará rodando em `http://localhost:3000` (ou na porta que você configurou no `.env`).

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

**Desenvolvido por:** Wellington Santos GitHub: https://github.com/wellington-1991
