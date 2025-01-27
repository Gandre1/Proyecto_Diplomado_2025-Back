const LapidaRepository = require('../db/repositorios/lapidaRepository');

class LapidaService {

  getImageUrl(tiposLapida, tiposDiseno) {
    const imageMap = {
      Tradicional: {
        Floral: '/images/lapidas/tradicional-floral.jpg',
        Minimalista: '/images/lapidas/tradicional-minimalista.jpg',
      },
      Moderna: {
        Floral: '/images/lapidas/moderna-floral.jpg',
        Minimalista: '/images/lapidas/moderna-minimalista.jpg',
      },
    };
  
    const imagePath = imageMap[tiposLapida]?.[tiposDiseno] || '/images/lapidas/default.jpg';
    return `http://localhost:5000${imagePath}`;
  }  

  async createLapida(data) {
    const imagenUrl = this.getImageUrl(data.tiposLapida, data.tiposDiseno);
    return await LapidaRepository.create({ ...data, imagenUrl });
  }

  async getLapidaOptions() {
    return {
      tiposLapida: ['Tradicional', 'Moderna'],
      tiposDiseno: ['Floral', 'Minimalista'],
    };
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
