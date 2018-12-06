const Database = require('./Database.js');

module.exports = class User {

  constructor(db) {
    this.db = db;
  }

  getUserById(id) {   
    return this.db.cache[id];    
  }

  insertUser(object) {    
    this.db.insert(object);
  }

  updateUserById(id, object) {
    this.db.cache[id] = object;  
  }

  deleteUserById(id) {
    delete this.db.cache[id];
  }
}