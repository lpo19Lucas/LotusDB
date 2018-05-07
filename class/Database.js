const fs = require('fs'); 
module.exports = class Database {

  constructor(url) {
    this.url = url;
  }

  cached(data) {
    this.cache = data;
    console.log(cache)
  }

  openDb() {
    const fileContent = fs.readFileSync(this.url).toString('utf8');
    if (!fileContent) {
      this.cache = {};
    } else {
      this.cache = JSON.parse(fileContent);
    }  
  }
 
  readString() {
    const content = fs.readFileSync('./db/var/db.json');
    return content.toString('utf-8');
  }
  
  readJson() {
    const json = JSON.parse(this.readString());
    this.cache(json)
    return json;
  }

  insert(object){
    let json = this.readJson();
    let newObject = Object.keys(json).length;
    json[newObject] = object;
    let str = JSON.stringify(json)
    fs.writeFile('./db/var/db.json', str, (err) => {
      if (err){
        return true;
      }   
      return false;
    });
  }

  

/*  cache.prototype.getCache = function () {
    return cache;
  };

  getCache(){
    return this.cache
  }
*/
} 


