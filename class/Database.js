const fs = require('fs'); 
module.exports = class Database {
  openDb(){
    fs.readFile('./db/var/db.json', 'utf8',  (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });  
  }
 
  readString() {
    const content = fs.readFileSync('./db/var/db.json');
    return content.toString();
  }
  
  readJson() {
    const content = fs.readFileSync('./db/var/db.json');
    const json = JSON.parse(content.toString('utf-8'));
    return json;
  }

  insertUser(object){
    const content = fs.readFileSync('./db/var/db.json');
    const json = JSON.parse(content.toString('utf-8'));
    let jsonCount = Object.keys(json).length
    let newObject = jsonCount + 1;
    json[newObject] = object;
    let str = JSON.stringify(json)
    fs.writeFile('./db/var/db.json', str, (err) => {
      if (err){
        console.log('Algo deu errado, o objeto' + JSON.stringify(object) + ' não foi adicionado')
      }   
      console.log('O objeto ' + JSON.stringify(object) + ' foi adicionado com sucesso!');
    });
  }
} 

