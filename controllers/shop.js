const Product = require("../model/product");

exports.gets = (req, res, next) => {
  Product.fetchAll((products => {
    res.render('shop/products', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }));
}

exports.listGet = (req, res, next) => {
  Product.fetchAll((products => {
    res.render('shop/products', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }));
}