const ProductService = require('../services/productService');

class productController {
  async create(req, res) {
    try {
      const { name, description, price, imageUrl } = req.body;
      const product = await ProductService.createProduct({ name, description, price, imageUrl });
      res.status(201).json({ message: 'Producto agregado correctamente', product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.deleteProduct(id);
      res.json({ message: 'Producto eliminado correctamente', product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
}

module.exports = new productController();
