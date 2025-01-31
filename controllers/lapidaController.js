const LapidaService = require('../services/lapidaService');

class LapidaController {
  async create(req, res) {
    try {
      const {nombre, color, precio, imagen } = req.body;
      const lapida = await LapidaService.createLapida({
        nombre,
        color,
        precio,
        imagen
      });

      res.status(201).json({ message: 'Lápida personalizada creada correctamente', lapida });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createDisenoLapida(req, res) {
    try {
      const { nombre, imagen } = req.body;
      const newDisenoLapida = await LapidaService.createDisenoLapida(nombre, imagen);
      res.status(201).json(newDisenoLapida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDisenos(req, res) {
    try {
      const disenos = await LapidaService.getLapidaDisenos();
      res.json(disenos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const lapidas = await LapidaService.getAllLapidas();
      const disenos = await LapidaService.getLapidaDisenos();
  
      res.json({ lapidas, disenos });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const lapida = await LapidaService.deleteLapida(id);
      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      res.json({ message: 'Lápida Eliminada', lapida });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new LapidaController();
