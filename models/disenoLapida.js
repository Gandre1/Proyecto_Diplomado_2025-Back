const mongoose = require('mongoose');

const disenoLapidaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true }, 
});

module.exports = mongoose.model('DisenoLapida', disenoLapidaSchema);
