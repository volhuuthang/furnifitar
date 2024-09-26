const mongoose = require('mongoose');

const wishlistProductSchema = new mongoose.Schema({
  wishlist_id: String,
  product_id: String
});

module.exports = mongoose.model('WishlistProduct', wishlistProductSchema);
