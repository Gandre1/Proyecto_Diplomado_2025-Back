const ProductRepository = require('../db/repositorios/productRepository');

class productService {
  async createProduct(data) {
    return await ProductRepository.create(data);
  }

  async getAllProducts() {
    return await ProductRepository.findAll();
  }

  async deleteProduct(productId) {
    const product = await ProductRepository.findById(productId);
    if (!product) throw new Error('Producto no encontrado');
    await ProductRepository.deleteById(productId);
    return product;
  }
}

module.exports = new productService();
