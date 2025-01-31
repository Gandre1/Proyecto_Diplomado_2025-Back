const mongoose = require('mongoose');

const lapidaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  color: { type: String, required: true },
  imagen: { type: String, required: true },
  precio: { type: Number, required: true }, 
});

module.exports = mongoose.model('Lapida', lapidaSchema);
