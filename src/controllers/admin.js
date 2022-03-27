
const Product = require('../models/product')
// exports.getProducts = (req, res, next) => {
//   // Product.findAll()
//   req.user.getProducts() // the user we set in app.js
//     .then(products => {
//       res.render('admin/products', {
//         prods: products,
//         pageTitle: 'Admin Products',
//         path: '/admin/products'
//       });
//     })
//     .catch(console.error);
// };

exports.getAddProduct = (req, res, next) => {
  res.render('admin/product-add', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const userProduct = { title, imageUrl, price, description } = req.body;
  const product = new Product(...userProduct)
  product.save()
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const id = req.params.productId;
//   Product.findByPk(id)
//   .then(product => {
//     if (!product) {
//       return res.redirect('/');
//     }
//     res.render('admin/product-edit', {
//       pageTitle: 'Edit Product',
//       path: '/admin/product-edit',
//       editing: editMode,
//       product: product
//     });
//   }).catch(console.error);;
// };

// exports.postEditProduct = (req, res, next) => {
//   const prod = req.body
//   Product.findByPk(prod.productId)
//     .then(p => {
//       p.title = prod.title;
//       p.price = prod.price;
//       p.imageUrl = prod.imageUrl;
//       p.description = prod.description;
//       return p.save();
//     })
//     .then(r => {
//       console.log('PRODUCT UPDATED');
//       res.redirect('/admin/products');
//     })
//     .catch(console.error);
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   // Product.destroy({
//   //   where: {
//   //     id: prodId
//   //   }
//   // }).then(result => {
//   //   res.redirect('/admin/products');
//   Product.findByPk(prodId)
//   .then(result => {
//     if(req.user.id == result.UserId)
//       return result.destroy()
//     else return new Promise((resolve, reject) => {
//       resolve()
//     })
//   }).then (result => {
//     res.redirect('/admin/products');
//   })
//   .catch(console.error);
// };
