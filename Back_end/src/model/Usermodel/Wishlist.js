const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  wishlist_id: String,
  user_id: String
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
