const CartRepository = require('../db/repositorios/cartRepository');

class CartService {
  async addToCart(productType, productId, productDetails, cantidad) {
    const precioTotal = productDetails.precio * cantidad;
    const cartItemData = { productType, productId, productDetails, cantidad, precioTotal };

    return await CartRepository.addItem(cartItemData);
  }

  async getCartItems() {
    return await CartRepository.findAll();
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
