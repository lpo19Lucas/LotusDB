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

  insert(str){
    fs.writeFile('./db/var/db.json', str, (err) => {
      if (err){
        console.log('Algo deu errado, o objeto não foi adicionado')
      }   
      console.log('O objeto foi adicionado com sucesso!');
    });
  }
} 

