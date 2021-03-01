# Santa Claus Letter

Para desenvolver o projeto foi utilizado tecnologias como **Postgres**, **Node**, **Typescript**, **Docker**, **Typeorm** entre outras bibliotecas.

Para rodar o projeto primeiro devemos clonar o repositório e depois rodar o comando ```yarn``` ou ```npm install``` para instalar todas as dependências.

Será necessário ter instalado o **PostgreSQL** ou o **Docker**.

Se você não tiver a imagem do postgresql instalada será necessário instalar, mas para isso é necessário que esteja no usuário root ou coloque *sudo* antes de cada comando:

```docker pull postgres```

Criar um container para o projeto com o comando:

```docker run --name xmas -e POSTGRES_PASSWORD=xmas123 -p 5432:5432 -d postgres```

Será preciso criar uma database, para isso é necessário abrir o postgres com o docker usando o comando:

```docker exec -it xmas psql -U postgres --password```

Insira a senha ```xmas123```

Feito isso insira o comando:

```create database products;```

Esse comando vai criar a database, depois de criada insira o comando ```\q ``` para sair.

## Cofigurando e rodando a api

Será necessário inserir um arquivo com o nome **ormconfig.json** com as configurações do banco de dados, pois por se tratar das credenciais do banco esse arquivo esta no .gitignore, as configurações para o ormconfig.json são:

```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "xmas123",
  "database": "santa_claus",
  "entities": [
    "./src/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/infra/typeorm/migrations/*.ts"
  ],
  "loggin": true,
  "cli": {
    "migrationsDir": "./src/infra/typeorm/migrations",
    "entitiesDir": "./src/**/infra/typeorm/entities"
  }
}
```

Feito isso será necessário rodar as migration com o comando :

```yarn typeorm migration:run```

Para rodar os testes unitários o comando é :

```yarn test```

Esse comando criará uma pasta chamada **coverage** dentro dela uma pasta **lcov-report** nessa pasta existe um arquivo **index.html** com o relatório de todos os testes.

Para rodar o servidor o camando é:

```yarn dev```

Dentro do projeto tem os arquivos **insomnia_core** para testar a api e **insomnia_designer** com o contrato de api.

Para gerar o token de acesso foi criado um usuário adm e na rota **http://localhost:3333/session** com o método POST, o token deverá ser inserido no header das rotas que são exigidas autenticação, as credenciais do usuário é:

```
{
	"userName": "Papai Noel",
	"password": "noel123" 
}
```

Para criar uma carta acesse **http://localhost:3333/session** com o método POST:

```
{
	"name": "João",
	"title": "Fui um bom menino",
  "letter": "Querido, Papa Noel, Eu fui um bom menino e gostaria de ganhar uma bicicleta",
  "address": "Rua 9 de julho, 25"
}
```

Para as rotas GET será necessário o token

**http://localhost:3333/session** com o método GET será retornado todas as cartas escritas caso queira buscar por apenas uma carta, necessário passar o id como parâmetro **http://localhost:3333/session/id** 

*Obs: A api foi criada com yarn caso use npm é só alterar os comandos de yarn para npm*




