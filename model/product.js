const path = require('path');
const fs = require('fs');

const paths = require('../util/path');

const p = path.join(paths, 'data', 'product.json');

module.exports = class Product{
  constructor(title, imageUrl, price, description){
    this.id = (Math.random() / 100).toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save(){
    Product.fetchAll(data => {
      data.push(this)
      fs.writeFile(p, JSON.stringify(data), (err) => {
        console.log(err);
      })
    })
  }
  static edit(obj){
    Product.fetchAll(data => {
      itm = data.find(x => x.id == obj.id);
      itm.title = obj.title;
      itm.imageUrl = obj.imageUrl;
      itm.price = obj.price;
      itm.description = obj.description;

      fs.writeFile(p, JSON.stringify(data), (err) => {
        console.log(err);
      })
    })
  }
  static fetchAll(spitData = (products = new Array(Product)) => {}){
    let products = []
    fs.readFile(p, (err, fileContent) => {
      if(!err){
        products = JSON.parse(fileContent);
      }
      spitData(products)
    })
  }
}