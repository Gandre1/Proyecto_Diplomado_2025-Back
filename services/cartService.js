const cartRepository = require('../db/repositorios/cartRepository');
const CartRepository = require('../db/repositorios/cartRepository');

class CartService {
  async addToCart(req, res) {
    try {
      const { nombreProducto, detallesProducto, cantidad, precioTotal } = req.body;
      const userId = req.user.id;
      const cartItemData = { nombreProducto, detallesProducto, cantidad, precioTotal, userId };
      const cartItem = await cartRepository.addItem(cartItemData);
      res.status(201).json({ message: 'Producto agregado al carrito', cartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCartItems(req, res) {
    try {
      const userId = req.user.id; 
      const cartItems = await cartRepository.getCartItemsByUser(userId);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
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

  async clearCart(userId) {
    return await CartRepository.clearCart(userId);
  }
}

module.exports = new CartService();
