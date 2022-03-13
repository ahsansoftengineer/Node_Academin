const sequelize = require('../util/database')
const User = require('../models/user');

const RunSequelize = (startServer) => {
  sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Ahsan', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    return user.createCart();
  })
  .then(cart => {
    startServer()
    
  })
  .catch(console.log);
}
module.exports = RunSequelize