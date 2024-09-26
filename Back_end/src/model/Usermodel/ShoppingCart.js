const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
  cart_id: String,
  user_id: String,
  product_id: String,
  quantity: Number
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
