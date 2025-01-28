const LapidaService = require('../services/lapidaService');
const CartService = require('../services/cartService');

class LapidaController {
  async create(req, res) {
    try {
      const { nombreMuerto, fechaNacimiento, fechaDefuncion, numeroLocalizacion, tiposLapida, tiposDiseno, precio, imageUrl } = req.body;

      const lapida = await LapidaService.createLapida({
        nombreMuerto,
        fechaNacimiento,
        fechaDefuncion,
        numeroLocalizacion,
        tiposLapida,
        tiposDiseno,
        precio,
        imageUrl
      });

      res.status(201).json({ message: 'Lápida personalizada creada correctamente', lapida });
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

  async getOptions(req, res) {
    try {
      const options = await LapidaService.getLapidaOptions();
      res.json(options);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createTipoLapida(req, res) {
    try {
      const { nombre, imagen } = req.body;
      const newTipoLapida = await LapidaService.createTipoLapida(nombre, imagen);
      res.status(201).json(newTipoLapida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createDisenoLapida(req, res) {
    try {
      const { tipoLapidaId, nombre, imagen } = req.body;
      const newDisenoLapida = await LapidaService.createDisenoLapida(tipoLapidaId, nombre, imagen);
      res.status(201).json(newDisenoLapida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async addToCart(req, res) {
    try {
      const { lapidaId, cantidad } = req.body;

      const lapida = await LapidaService.getLapidaById(lapidaId);
      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      const lapidaDetails = {
        nombreMuerto: lapida.nombreMuerto,
        fechaNacimiento: lapida.fechaNacimiento,
        fechaDefuncion: lapida.fechaDefuncion,
        numeroLocalizacion: lapida.numeroLocalizacion,
        tiposLapida: lapida.tiposLapida,
        tiposiseno: lapida.tiposDiseno,
        precio: lapida.precio,
        imageUrl: lapida.imageUrl,
      };

      const cartItem = await CartService.addToCart('lapida', lapidaId, lapidaDetails, cantidad);
      res.status(201).json({ message: 'Lápida personalizada agregada al carrito', cartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const lapida = await LapidaService.deleteLapida(id);
      if (!lapida) return res.status(404).json({ message: 'Lápida no encontrada' });

      res.json({ message: 'Lápida personalizada eliminada', lapida });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new LapidaController();
