const mongoose = require('mongoose');

const tipoLapidaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
});

module.exports = mongoose.model('TipoLapida', tipoLapidaSchema);
