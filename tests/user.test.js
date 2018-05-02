const Database = require('../class/Database.js');
const User = require('../class/User.js');
let db = new Database();
let user = new User();
//console.log(user.getUserById(2))
describe('should manage the database', () => {
  it('should open de database and get the id', () => {
    expect({
      "name": "Rodrigo",
      "age": 42
    }).toBe({
      "name": "Rodrigo",
      "age": 42
    });
  });
})