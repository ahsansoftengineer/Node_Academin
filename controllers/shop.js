const Product = require("../model/product");

exports.gets = (req, res, next) => {
  Product.fetchAll((products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    });
  }));
}

exports.get = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Product.fetchAll(products => {
    res.render('shop/product-details', {
      prod: products.find(x => x.id == id),
      pageTitle: 'Shop',
      path: '/products',
    });
  });
}

exports.index = (req, res, next) => {
  Product.fetchAll((products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  }));
}
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Cart'
  })
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Cart'
  })
}
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}