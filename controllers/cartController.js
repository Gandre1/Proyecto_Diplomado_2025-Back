const CartService = require('../services/cartService');

class cartController {
  async addToCart(req, res) {
    try {
      const { productType, productId, productDetails, cantidad } = req.body;
      const cartItem = await CartService.addToCart(productType, productId, productDetails, cantidad);
      res.status(201).json({ message: 'Producto agregado al carrito', cartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCartItems(req, res) {
    try {
      const cartItems = await CartService.getCartItems();
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async removeCartItem(req, res) {
    try {
      const { id } = req.params;
      const cartItem = await CartService.removeCartItem(id);
      res.json({ message: 'Elemento eliminado del carrito', cartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async clearCart(req, res) {
    try {
      await CartService.clearCart();
      res.json({ message: 'Carrito limpiado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new cartController();
