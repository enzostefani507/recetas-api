const express = require('express');
const { obtenerRecetas, obtenerRecetaPorId } = require('../controllers/recetas.controller');
const router = express.Router();

router.get('/', obtenerRecetas);
router.get('/:id', obtenerRecetaPorId);

module.exports = router;