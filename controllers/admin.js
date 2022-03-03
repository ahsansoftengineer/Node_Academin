const Product = require("../model/product");

exports.productAddGet = (req, res, next) => {
  res.render('admin/product-add', {
    pageTitle: 'Product Add',
    path: '/admin/product-add',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  }); 
}
exports.productAddPost = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // productz.push({ title: req.body.title });
  // Both are posible routes
  // res.redirect('/admin/product-list');
  res.redirect('product-list');
}
exports.productListGet = (req, res, next) => {
  Product.fetchAll((products => {
    res.render('admin/product-list', {
      prods: products,
      pageTitle: 'Product List',
      path: '/admin/product-list',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }));
}