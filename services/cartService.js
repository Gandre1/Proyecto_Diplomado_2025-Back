const CartRepository = require('../db/repositorios/cartRepository');

class CartService {
  async addToCart(cartItemData) {
    try {
      return await CartRepository.addItem(cartItemData);
    } catch (error) {
      throw new Error(`Error al agregar al carrito: ${error.message}`);
    }
  }

  async getCartItems(userId) {
    try {
      return await CartRepository.getCartItemsByUser(userId);
    } catch (error) {
      throw new Error(`Error al obtener los elementos del carrito: ${error.message}`);
    }
  }

  async updateCartItem(cartItemId, cantidad, precioTotal) {
    try {
      return await CartRepository.updateItem(cartItemId, cantidad, precioTotal);
    } catch (error) {
      throw new Error(`Error al actualizar el elemento del carrito: ${error.message}`);
    }
  }

  async removeCartItem(cartItemId) {
    try {
      const cartItem = await CartRepository.findById(cartItemId);
      if (!cartItem) throw new Error('Elemento no encontrado en el carrito');
      
      await CartRepository.deleteById(cartItemId);
      return cartItem;
    } catch (error) {
      throw new Error(`Error al eliminar el elemento del carrito: ${error.message}`);
    }
  }

  async clearCart(userId) {
    try {
      return await CartRepository.clearCart(userId);
    } catch (error) {
      throw new Error(`Error al limpiar el carrito: ${error.message}`);
    }
  }
}

module.exports = new CartService();
