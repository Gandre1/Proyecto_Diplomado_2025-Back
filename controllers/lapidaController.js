const LapidaService = require('../services/lapidaService');

class LapidaController {
  async create(req, res) {
    try {
      const { nombre, opciones, precio } = req.body;

      if (!nombre || !Array.isArray(opciones) || opciones.length === 0 || !precio) {
        return res.status(400).json({ message: 'Datos incompletos o inválidos' });
      }

      const lapida = await LapidaService.createLapida({
        nombre,
        opciones,
        precio
      });

      res.status(201).json({ message: 'Lápida creada correctamente', lapida });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const lapidas = await LapidaService.getAllLapidas();
      res.json(lapidas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const lapida = await LapidaService.getLapidaById(id);

      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      res.json(lapida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, opciones, precio } = req.body;

      const lapida = await LapidaService.updateLapida(id, { nombre, opciones, precio });

      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      res.json({ message: 'Lápida actualizada correctamente', lapida });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const lapida = await LapidaService.deleteLapida(id);
      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      res.json({ message: 'Lápida eliminada correctamente', lapida });
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
}

module.exports = new LapidaController();
