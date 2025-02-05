const express = require('express');
const LapidaController = require('../controllers/lapidaController');

const router = express.Router();


router.get('/diseno', LapidaController.getDisenos);
router.post('/diseno', LapidaController.createDisenoLapida);


router.post('/', LapidaController.create);
router.get('/', LapidaController.getAll);
router.get('/:id', LapidaController.getById);
router.delete('/:id', LapidaController.delete);

module.exports = router;
