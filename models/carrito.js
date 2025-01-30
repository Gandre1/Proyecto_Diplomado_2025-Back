const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  productType: { type: String, required: true }, 
  productId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
  productDetails: { type: Object, required: true },
  cantidad: { type: Number, required: true, default: 1 },
  precioTotal: { type: Number, required: true },
});

module.exports = mongoose.model('CartItem', carritoSchema);
