const LapidaRepository = require('../db/repositorios/lapidaRepository');
const DisenoLapida = require('../models/disenoLapida');

class LapidaService {

  async getLapidaDisenos() {
    try {
      const disenos = await DisenoLapida.find();

      return disenos; 
      
    } catch (error) {
      throw new Error('Error al obtener los diseños: ' + error.message);
    }
  }

  async createDisenoLapida(nombre, imagen) {
    const disenoLapida = new DisenoLapida({nombre, imagen });
    await disenoLapida.save();
    return disenoLapida;
  }

  async createLapida(data) {
    return await LapidaRepository.create(data);
  }

  async getAllLapidas() {
    return await LapidaRepository.findAll();
  }

  async getLapidaById(id) {
    return await LapidaRepository.findById(id);
  }

  async updateLapida(id, data) {
    try {
      const lapida = await LapidaRepository.updateById(id, data);
      return lapida;
    } catch (error) {
      throw new Error("Error al actualizar la lápida: " + error.message);
    }
  }

  async deleteLapida(id) {
    const lapida = await LapidaRepository.findById(id);
    if (!lapida) throw new Error('Lápida no encontrada');
    await LapidaRepository.deleteById(id);
    return lapida;
  }
}

module.exports = new LapidaService();
