
const Product = require('../models/product')
exports.getProducts = (req, res, next) => {
  Product.gets()
  .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
  .catch(console.error);
};

exports.getAddProduct = (req, res, next) => {
  res.render('admin/product-add', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const userProduct = { title, imageUrl, price, description } = req.body;
  const product = new Product(userProduct)
  product
    .save()
    .then(result =>{
      console.log('Created')
      res.redirect('/admin/products')
    })
    .catch(err => {
      console.log(err)
    })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const id = req.params.productId;
  Product.get(id)
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/product-edit', {
      pageTitle: 'Edit Product',
      path: '/admin/product-edit',
      editing: editMode,
      product: product
    });
  }).catch(console.error);;
};

exports.postEditProduct = (req, res, next) => {
  const prod = req.body
  console.log(prod)
  const product = new Product(prod)
  product.save()
    .then(r => {
      console.log('PRODUCT UPDATED');
      res.redirect('/admin/products');
    })
    .catch(console.error);
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.delete(prodId)
  .then(result => {
    res.redirect('/admin/products');
  })
  .catch(console.error);
};
