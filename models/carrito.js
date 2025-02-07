const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  nombreProducto: { type: String, required: true },
  detallesProducto: { type: Object, required: true },
  cantidad: { type: Number, required: true, default: 1 },
  precioTotal: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
});

module.exports = mongoose.model('CartItem', carritoSchema);
