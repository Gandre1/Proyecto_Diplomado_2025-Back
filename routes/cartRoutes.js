const express = require('express');
const { authenticate } = require('../middlewares/authenticate');
const CartController = require('../controllers/cartController');

const router = express.Router();

router.post('/', authenticate, CartController.addToCart);
router.get('/', authenticate, CartController.getCartItems);
router.delete('/:id', CartController.removeCartItem);
router.delete('/', CartController.clearCart);
router.put('/:id', CartController.updateCartItem);

module.exports = router;
