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

  async updateById(id, data) {
    return await Lapida.findByIdAndUpdate(id, data, { new: true });
  }  

  async deleteById(lapidaId) {
    return await Lapida.findByIdAndDelete(lapidaId);
  }
}

module.exports = new lapidaRepository();
