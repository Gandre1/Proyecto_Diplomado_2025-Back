const express = require('express');
const LapidaController = require('../controllers/lapidaController');

const router = express.Router();

router.post('/', LapidaController.create); 
router.get('/:id', LapidaController.getAll);
router.delete('/:id', LapidaController.delete);
router.get('/diseno', LapidaController.getDisenos);
router.post('/diseno', LapidaController.createDisenoLapida); 

module.exports = router;
