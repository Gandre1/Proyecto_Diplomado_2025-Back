const LapidaRepository = require('../db/repositorios/lapidaRepository');
const TipoLapida = require('../models/tipoLapida');
const DisenoLapida = require('../models/disenoLapida');

class LapidaService {

  async getLapidaOptions() {
    try {
      const tipoLapida = await TipoLapida.find();
      const disenos = await DisenoLapida.find();
      
      const lapidaOptions = tipoLapida.map(lapida => {
        const relatedDisenos = disenos.filter(disenos => disenos.tipoLapidaId.toString() === lapida._id.toString());
        return {
          tipoLapida: lapida,
          disenos: relatedDisenos
        };
      });

      return lapidaOptions;
    } catch (error) {
      throw new Error('Error al obtener las opciones de lápidas y diseños: ' + error.message);
    }
  }

  async createTipoLapida(nombre, imagen) {
    const tipoLapida = new TipoLapida({ nombre, imagen });
    await tipoLapida.save();
    return tipoLapida;
  }

  async createDisenoLapida(tipoLapidaId, nombre, imagen) {
    const disenoLapida = new DisenoLapida({ tipoLapidaId, nombre, imagen });
    await disenoLapida.save();
    return disenoLapida;
  }

  async createLapida(data) {
    const imageUrl = data.imageUrl || '/images/lapidas/default.jpg';
    return await LapidaRepository.create({ ...data, imageUrl });
  }

  async getAllLapidas() {
    return await LapidaRepository.findAll();
  }

  async getLapidaById(id) {
    return await LapidaRepository.findById(id);
  }

  async deleteLapida(id) {
    const lapida = await LapidaRepository.findById(id);
    if (!lapida) throw new Error('Lápida no encontrada');
    await LapidaRepository.deleteById(id);
    return lapida;
  }
}

module.exports = new LapidaService();
