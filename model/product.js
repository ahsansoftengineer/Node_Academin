const path = require('path');
const fs = require('fs');

const paths = require('../util/path');

const p = path.join(paths, 'data', 'product.json');

module.exports = class Product{
  constructor(title, imageUrl, price, description){
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
  static fetchAll(spitData){
    let products = []
    fs.readFile(p, (err, fileContent) => {
      if(!err){
        products = JSON.parse(fileContent);
      }
      spitData(products)
    })
  }
}