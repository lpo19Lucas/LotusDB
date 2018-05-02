const Database = require('./Database.js');
module.exports = class User extends Database {
  getUserById(id){
    let db = new Database();
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

  
}