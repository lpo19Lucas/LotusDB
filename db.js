/*
Criar pasta db, dentro de db criar uma pasta chamada var, dentro de var criar arquivo db.json.
{
  1:{
    name: 'Lucas',
    age: 20
  },
  2: {
    name: 'Rodrigo',
    age: 42
  }
}

Dentro da pasta db, criar db.js, neste criar função chamada getUserById(id) e retornara um objeto do db. 
Criar outra func createUser(objeto) e retornara o objeto criado.
*/

const Database = require('./class/Database.js');
const User = require('./class/User.js');
let db = new Database();
let user = new User();

user.getUserById(4);
user.insertUser({"name": "Guilerme",  "age": 32}) 