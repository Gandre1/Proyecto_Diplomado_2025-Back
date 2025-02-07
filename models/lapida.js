const mongoose = require('mongoose');

const lapidaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  opciones: [
    {
      color: { type: String, required: true },
      imagen: { type: String, required: true }
    }
  ],
  preciosxtamanos: [
    {
      precio: { type: Number, required: true },  
      tamano: { type: String, required: true } 
    }
  ],
  posicionesTexto: { 
    nombre: { x: Number, y: Number },
    fechaNacimiento: { x: Number, y: Number },
    fechaDefuncion: { x: Number, y: Number }
  }
});

module.exports = mongoose.model('Lapida', lapidaSchema);
