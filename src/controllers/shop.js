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
    .catch(console.error);
};
exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  // findById replaced with findByPk
  Product.findByPk(id)
    .then(product => {
      res.render('shop/product-detail', {
        product,
        pageTitle: product.title,
        path: '/product-detail'
      });
    })
    .catch(console.error);
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
  // .catch(console.error);
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
    .catch(console.error);
};
exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(console.error);;
    })
    .catch(console.error);;
};
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(console.error);;
};
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(console.error);;
};
exports.getOrders = (req, res, next) => {
  req.user
    // Eager Loading
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .then(console.log);
};
exports.postOrders = (req, res, next) => {
  console.warn('in post cart')
  let fetchedCart
  req.user
  .getCart()
    .then(cart => {
      fetchedCart = cart
      return cart.getProducts()
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProduct(
            products.map(product =>{
              product.orderItem = {
                quantity: product.cartItem.quantity
              }
              return product
          }))
        })
        .catch(console.error);
    })
    .then(result => {
      console.warn(result);
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      console.error('in redirect')
      res.redirect('/orders')
    })
    .catch(console.error);;
  // res.render('shop/orders', {
  //   path: '/orders',
  //   pageTitle: 'Your Orders'
  // });
};
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
