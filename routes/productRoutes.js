const express = require('express');
const ProductController = require('../controllers/productController');
const jwt = require('jsonwebtoken');

const router = express.Router();

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Acceso denegado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    if (decoded.role !== 'admin') return res.status(403).json({ message: 'No autorizado' });
    next();
  });
};

router.post('/', verifyAdmin, ProductController.create);
router.get('/', ProductController.getAll);
router.delete('/:id', verifyAdmin, ProductController.delete);

module.exports = router;  
