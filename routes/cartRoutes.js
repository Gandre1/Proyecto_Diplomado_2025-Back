const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();

router.post('/', CartController.addToCart);
router.get('/', CartController.getCartItems);
router.delete('/:id', CartController.removeCartItem);
router.delete('/', CartController.clearCart);
router.put('/:id', CartController.updateCartItem);

module.exports = router;
