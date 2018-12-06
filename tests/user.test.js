const Database = require('../class/Database.js');
const User = require('../class/User.js');
let db = new Database();
let user = new User();
//console.log(user.getUserById(2))
describe('should manage the database', () => {
  test('should get the object by the id', () => {
    expect(user.getUserById(3)).toBe({ name: 'Arthur', age: 42 });
  });
})