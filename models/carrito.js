const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  productType: { type: String, required: true }, // Tipo del producto (ejemplo: 'lapida', 'flores', etc.)
  productId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID del producto específico
  productDetails: { type: Object, required: true }, // Detalles específicos del producto
  cantidad: { type: Number, required: true, default: 1 },
  precioTotal: { type: Number, required: true },
});

module.exports = mongoose.model('CartItem', carritoSchema);
