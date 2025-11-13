<!--
    Este README.md foi gerado com base nos arquivos do seu projeto.
    Sinta-se à vontade para personalizá-lo com mais detalhes, capturas de tela,
    informações sobre o autor, licença, etc.
-->

# Project Champions League API
Uma API RESTful robusta desenvolvida com Node.js e Express.js em TypeScript, projetada para gerenciar dados de clubes de futebol, possivelmente no contexto da Champions League. A utilização de TypeScript garante maior segurança, detecção precoce de erros e manutenibilidade do código. Esta API serve como um backend para uma aplicação frontend que necessita de informações sobre clubes.

Uma API RESTful desenvolvida com Node.js e Express.js em TypeScript, projetada para gerenciar dados de clubes de futebol, possivelmente no contexto da Champions League. Esta API serve como um backend para uma aplicação frontend que necessita de informações sobre clubes.

## 🚀 Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript.
*   **Express.js**: Framework web para Node.js, utilizado para construir a API.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e escalabilidade do código.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, crucial para a detecção precoce de erros, melhorando a manutenibilidade, escalabilidade e a robustez do código.
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
npm run dev
# ou
yarn dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta que você configurou no `.env`).

## 🧪 Testando a API com CORS

Para testar a interação da API com um frontend que respeita as políticas de CORS, você pode usar o arquivo `test-cors.html` fornecido.

1.  **Certifique-se de que o servidor da API está rodando** (passo "Como Rodar" acima).
2.  **Sirva o `test-cors.html` de uma origem permitida pelo CORS.**
    *   No seu `src/app.ts`, a origem permitida é `http://127.0.0.1:5500`.
    *   Se você usa o VS Code, instale a extensão Live Server.
    *   Configure o Live Server para usar a porta `5500` e o host `127.0.0.1` (em `settings.json` do VS Code: `"liveServer.settings.port": 5500`, `"liveServer.settings.host": "127.0.0.1"`).
    *   Clique com o botão direito no `test-cors.html` e selecione "Open with Live Server".
3.  **Abra o console do navegador** (F12) e clique no botão "Tentar Excluir Recurso". Observe as mensagens no console para ver como o CORS interage com as requisições.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido por:** Wellington (Seu Nome/GitHub)

<!-- Adicione aqui links para suas redes sociais ou portfólio, se desejar -->
