const Database = require('./Database.js');
let db = new Database();

module.exports = class User extends Database {

  getUserById(id){
    let json = db.readJson();
    let found = false;
    for (const object in json) {
      if (id == object) {
        console.log(json[object]);
        found = true;
      }
    }
    if (found == false) {
      console.log("Não existe um id " + id + " no Banco");
    }
  }

  insertUser(object){
    let json = db.readJson();
    let jsonCount = Object.keys(json).length
    let newObject = jsonCount + 1;
    json[newObject] = object;
    let str = JSON.stringify(json)
    db.insert(str);
  }

}