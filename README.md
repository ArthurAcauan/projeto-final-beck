# projeto-final-beck

iniciar projeto.

Passo 1 = abrir vs code e instalar as dependencias.
npm install init
npm install express
npm install sqlite3
npm instal nodemon

Passo 2 = botar o nodemon para funcionar, entrar no arquivo json
{
  "name": "projeto-final-beck",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1",
    "sqlite3": "^5.1.6"
  }
}

Passo 3 = Codar o arquivo app.js.

Passo 4 = Codar o arquivo main.html.

Passo 5 = Verificar o banco de dados, e ver se a tabela esta com as frases corretas.

Passo 6 = abrir o html e testar o projeto.

<button onclick="window.location.href='http://localhost:3030/frases';">Me mostre uma frase!</button>
