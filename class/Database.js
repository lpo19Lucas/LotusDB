const fs = require('fs'); 
module.exports = class Database {

  constructor(url) {
    this.url = url;
  }

  openDb() {
    const fileContent = fs.readFileSync(this.url).toString('utf8');
    const cache = {};
    if (!fileContent) {
      return false;
    } else {
      this.cache = JSON.parse(fileContent);
    }  
  }
  
  insert(object) {
    let json = this.cache;
    let newObject = Object.keys(json).length + 1;
    json[newObject] = object;
    this.cache = json;
  }

  commit() {
    fs.writeFile(this.url, JSON.stringify(this.cache), (err) => {
      if (err){
        console.error(err);
        return false;
      }
      return true;
    });
  }

  selectAll() {
    return this.cache
  }

} 


