const mongoose = require('mongoose');

const disenoLapidaSchema = new mongoose.Schema({
  tipoLapidaId: { type: mongoose.Schema.Types.ObjectId, ref: 'tipoLapida  ', required: true },
  nombre: { type: String, required: true },
  imagen: { type: String, required: true }, 
});

module.exports = mongoose.model('DisenoLapida', disenoLapidaSchema);
