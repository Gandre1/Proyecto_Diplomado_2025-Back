const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.post('/', ProductController.create);
router.get('/', ProductController.getAll);
router.delete('/:id', ProductController.delete);

module.exports = router;  
