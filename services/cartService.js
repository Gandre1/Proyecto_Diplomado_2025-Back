const CartRepository = require('../db/repositorios/cartRepository');

class CartService {
  async addToCart(nombreProducto, detallesProducto, cantidad, precioTotal) {
    const cartItemData = { nombreProducto, detallesProducto, cantidad, precioTotal };
    return await CartRepository.addItem(cartItemData);
  }

  async getCartItems() {
    return await CartRepository.findAll();
  }

  async updateCartItem(cartItemId, cantidad, precioTotal) {
    return await CartRepository.updateItem(cartItemId, cantidad, precioTotal);
  }

  async removeCartItem(cartItemId) {
    const cartItem = await CartRepository.findById(cartItemId);
    if (!cartItem) throw new Error('Elemento no encontrado en el carrito');
    await CartRepository.deleteById(cartItemId);
    return cartItem;
  }

  async clearCart() {
    return await CartRepository.clearCart();
  }
}

module.exports = new CartService();
