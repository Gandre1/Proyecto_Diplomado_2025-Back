const Lapida = require('../../models/lapida');

class lapidaRepository {
  async create(lapidaData) {
    const lapida = new Lapida(lapidaData);
    return await lapida.save();
  }

  async findAll() {
    return await Lapida.find();
  }

  async findById(lapidaId) {
    return await Lapida.findById(lapidaId);
  }

  async deleteById(lapidaId) {
    return await Lapida.findByIdAndDelete(lapidaId);
  }
}

module.exports = new lapidaRepository();
