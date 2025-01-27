const CartItem = require('../../models/carrito');

class CartRepository {
  async addItem(cartItemData) {
    const cartItem = new CartItem(cartItemData);
    return await cartItem.save();
  }

  async findAll() {
    return await CartItem.find();
  }

  async findById(cartItemId) {
    return await CartItem.findById(cartItemId);
  }

  async deleteById(cartItemId) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }

  async clearCart() {
    return await CartItem.deleteMany({});
  }
}

module.exports = new CartRepository();
