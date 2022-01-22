# 🚀 Blog Api

# <P style="text-align:center">Avaliação Técnica - backend</P>

## Este é um desafio da  Saúde iD,  um empresa focada viabilizar interações que criam valor entre clientes e prestadores de serviços na área da saúde.

<br/>
<br/>

O desáfio consiste em criar uma API REST para criação de um Blog,  com as funcionalidade principais de um CRUD, seguindo alguns princípios da programação como o SOLID.


## Principas Funcionalidades

Criar uma API em Node Js para criação de um Blog,onde seja possível ```` Criar, Listar, Editar e Visualizar um Post````.
## Requisitos
- A listagem dos posts
- O detalhe de cada post:
-- Informações de título, descrição, autor e categorias
- Adicionar novos posts com as informações acima
- Editar post
- Excluir post

 <br>

## Plus
- Documentação
- Preocupação com o versionamento de código

<br>

## Desemvolvimento
-- Principais Tecnologias usadas :

- NEST JS - `para criar o servidor`,
- NODE JS - `para trazer o javascript no backend`
- TYPESCRIPT `para trazer o typagem no javascript`
- MONGODB - `usando como o Banco de Dados`
- MONGOOSE `para ajudar no mapeamento do banco `
- CLASS-VALIDATOR - `para validar as rotas`
- CLASS-TRANSFORMER - `para transfomar objectos em class`
- GIT `para controlo de verção do projecto`
- BCRYPTJS `para gerar hash da password do usuario`
- DOT ENV `para carregar as variáveis ambiente`
- JSON WEB TOKEN `para criar Json web Tokens  para authenticação na aplicação`
 - SWAGGER DOCUMENTATION `para criar documentação da aplicação`
----
<br/>
<br/>

## CONFIGURAÇÕES INICIAS
-- Primero temos que instalar as dependências do projecto seja utilizando o gerenciador de patocos ````  Yarn OU NPM ```` e no directório do projecto no terminar vamos rodar :
```
  yarn  | npm install ==  preferêncial   yarn
```

***
<br/>

###  Aseguir devemos ter na nossa maquina instalado o banco de Dados o ```MongoDB``` .

Para fazer a conexão basta no directório do projecto localizar o arquivo ```.env``` e modificalo com base as configurações do nosso banco de dados com a ``URL pode ser localhost ``caso seja local, a`` PORTA do banco de dados do MongoDB 27017``, o ``USERNAME``, a ``PASSWORD`` e o ``NOME DO DATABASE OU BANCO DE DADOS``..  exemplos do meu

```
MONGO_DATABASE_HOST=localhost
MONGO_DATABASE_PORT=27017
MONGO_DATABASE_NAME=blog
```

Assim basta apenas modicar o arquivo com base as tuas configurações ``e criar um banco de Dados com o nome da DATABASE blog ``.

#### Todos as variáveis  usada na app
```
PORT=
ENVIROMENT=

#Database environment
MONGO_DATABASE_HOST=
MONGO_DATABASE_PORT=
MONGO_DATABASE_NAME=

#JWT
SECRET=


```


<br/>
<br/>

 ## RODAR O PROJECTO
 <br/>

 -  ``Depois de instalar as dependências do projecto``
 -  ```Instalar o Banco de Dados MongoDB```
 -  ``e configurado o arquivo .env``


 basta rodar o comando na raiz do projecto e terminal
```
yarn start:dev | npm run start:dev
```

## COMO UTILIZAR API REST

Para ajudar no processo precisaremos  Acessar a ``Documentação da Aplicação``

No navegar  basta apenas colocar a seguinte URL
``http://localhost:4001/api``
A documentação feita com Swagger e auto explicativa.

****
  <br/><br/>
  ### ``Os Melhores comprimentos com amor 😁❤️  Samuel Paulo António - samueldev1997@gmail.com``
  ---
