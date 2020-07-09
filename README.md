# Desafio Backend - Casas Magalhães

Tecnologias usadas - **Backend**:

- Node (12.18.2)
- Express
- MySQL
- Knex (Query Builder)

Tecnologias usadas - **Frontend**:

- React
- React Router
- Axios

# Como usar:

## Backend

1.  Clone o repositório ou baixe o arquivo zipado para sua máquina, em seguida usando o terminal entre no diretório raiz do projeto, e execute o comando: `npm install` para baixar todas as dependências.
2.  É necessário possuir o banco de dados MySQL instalado na máquina em que você executar o projeto.
3.  Usando o _MySQL-Workbench_ ou via linha de comando, crie um banco de dados com o nome "**cm_teste-db**"
4.  Se necessário, modifique os campos do objeto _connection_ em "**backend/src/database/connection.js**" e inclua as credenciais que você utiliza no seu banco. A aplicação por padrão usa: **user = 'root'** e **password = 'root'**
5.  O próximo passo é executar as _migrations_ para que as mesmas criem as tabelas utilizadas. Ainda na raiz do projeto execute: `npx knex migrate:latest` e aguarde, será informado quando o processo terminar com a mensage: "`Batch 1 run: 3 migrations`"
6.  Após ter criado as tabelas, execute o comando: `npm run start` com isso o servidor já está pronto para receber requisições na porta `5000`

**Documentação**
A documentação dos endpoints utilizados na API pode ser consultada em: `http://localhost:5000/docs`.

**Info**: _Além de fonte de consulta, a interface fornecida pelo **Swagger UI** também permite testar os endpoints diretamente via navegador. Para isso, basta clicar para expandir umas das rotas, depois em **Try it out** no canto direito e por último em **Execute** mais abaixo._

## Frontend

1.  Clone o repositório ou baixe o arquivo zipado para sua máquina, em seguida usando o terminal entre no diretório raiz do projeto, e execute o comando: `npm install` para baixar todas as dependências.
2.  Usando o terminal entre no diretório raiz do projeto e execute: `npm run start` ou `yarn start` com isso a aplicação será iniciada em uma nova aba do seu navegador padrão.
3.  A aplicação frontend será executada na porta `3000`

## Funcionalidades que faltaram implementadar:

- Não é possível atualizar a quantidade de um produto através do app Frontend. **Mas no SwaggerUI, a funcionalidade pode ser testada.**
