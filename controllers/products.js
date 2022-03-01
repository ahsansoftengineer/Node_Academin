const Product = require("../model/product");

const productz = []
exports.addGet = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  }); 
}
exports.addPost = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // productz.push({ title: req.body.title });
  res.redirect('/');
}
exports.listGet = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}