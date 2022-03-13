const Cart = require('../models/cart');
const Product = require('../models/product');
// const { where } = require('sequelize/types');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/product-list'
      });
    })
    .catch(console.log)
};

exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  // findById replaced with findByPk
  Product.findByPk(id)
    .then(product => {
      console.log(product)
      res.render('shop/product-detail', {
        product,
        pageTitle: product.title,
        path: '/product-detail'
      });
    })
    .catch(console.log)
  // Approach 2
  // Product.findAll({ 
  //   where: { 
  //     id
  //   }
  // }).then(result => {
  //   const product = result[0]
  //   res.render('shop/product-detail', {
  //     product: product,
  //     pageTitle: product.title,
  //     path: '/product-detail'
  //   });
  // })
  // .catch(console.log)
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(console.log)
};

exports.getCart = (req, res, next) => {
  req.user.getCart(carts => {
    return carts
    .getProducts()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products
      });
    })
    .catch(console.log)
  })
  .catch(console.log)
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart(cart => {
      fetchedCart = cart
      return cart.getProducts({
        where: { id: prodId }
      })
  })
  .then(products => {
    let product;
    if (products.length > 0) {
      product = products[0];
    }
    if (product) {
      const oldQuantity = product.cartItem.quantity;
      newQuantity += oldQuantity;
      return product;
    }
    return Product.findByPk(prodId)
  })
  .then((data) => {
    return fetchedCart.addProduct(
      product, {
        through : {quantity: newQuantity}
      })
  })
  .then(() => {
    res.redirect('/cart')
  })
  .catch(console.log)
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
