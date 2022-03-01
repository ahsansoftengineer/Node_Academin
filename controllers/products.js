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
  productz.push({ title: req.body.title });
  res.redirect('/');
}
exports.listGet = (req, res, next) => {
  res.render('shop', {
    prods: productz,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: productz.length > 0,
    activeShop: true,
    productCSS: true
  });
}