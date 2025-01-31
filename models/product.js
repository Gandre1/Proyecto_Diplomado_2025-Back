const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  url: { type: String, required: true },
  imagen: { type: String, required: true },
});

module.exports = mongoose.model('product', productSchema);
