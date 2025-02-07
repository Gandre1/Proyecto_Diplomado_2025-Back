const CartService = require('../services/cartService');

class CartController {
  async addToCart(req, res) {
    try {
      const { nombreProducto, detallesProducto, cantidad, precioTotal } = req.body;
      const userId = req.user.id;
      const cartItemData = { nombreProducto, detallesProducto, cantidad, precioTotal, userId };
      
      const cartItem = await CartService.addToCart(cartItemData);
      res.status(201).json({ message: 'Producto agregado al carrito', cartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCartItems(req, res) {
    try {
      const userId = req.user.id;
      const cartItems = await CartService.getCartItems(userId);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCartItem(req, res) {
    try {
      const { id } = req.params;
      const { cantidad, precioTotal } = req.body;
      
      const updatedItem = await CartService.updateCartItem(id, cantidad, precioTotal);
      res.json({ message: 'Elemento actualizado', updatedItem });
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
      const userId = req.user.id;
      await CartService.clearCart(userId);
      res.json({ message: 'Carrito limpiado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CartController();
