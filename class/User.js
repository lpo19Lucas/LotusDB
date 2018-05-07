const Database = require('./Database.js');
let db = new Database();

module.exports = class User extends Database {

  getUserById(id){
    let json = db.readJson();
    if (json[id]) {
      return json[id];
    }
    return false;
  }

  insertUser(object) {    
    db.insert(object);
  }

}