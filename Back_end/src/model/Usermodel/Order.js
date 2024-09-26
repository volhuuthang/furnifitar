const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: String,
  user_id: String,
  total_amount: Number,
  order_date: Date,
  payment_status: String,
  shipping_address: String,
  delivery_status: String
});

module.exports = mongoose.model('Order', orderSchema);
