const Product = require('../../models/product');

class productRepository {
  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async findAll() {
    return await Product.find();
  }

  async findById(productId) {
    return await Product.findById(productId);
  }

  async deleteById(productId) {
    return await Product.findByIdAndDelete(productId);
  }
}

module.exports = new productRepository();
