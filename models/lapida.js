const mongoose = require('mongoose');

const lapidaSchema = new mongoose.Schema({
  nombreMuerto: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  fechaDefuncion: { type: Date, required: true },
  numeroLocalizacion: { type: String, required: true },
  tiposLapida: { type: String, required: true },
  tiposDiseno: { type: String, required: true }, 
  imagenUrl: { type: String, required: true },
  precio: { type: Number, required: true }, 
  cantidad: { type: Number, required: true, default: 1 }, 
  precioTotal: { type: Number, required: true }, 
});

module.exports = mongoose.model('Lapida', lapidaSchema);
