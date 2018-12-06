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

let db = new Database("./db/var/db.json");

db.openDb();

let user = new User(db);

//user.insertUser({"name": "Thila",  "age": 21})
//console.log(db.select())

//console.log(db.commit())


//console.log(user.getUserById(6));
//user.updateUserById(6, {"name": "Breno",  "age": 45})
user.deleteUserById(5)
db.commit()
// console.log(db.selectAll())
console.log(db.selectAll())
// console.log(user.getUserById(9));