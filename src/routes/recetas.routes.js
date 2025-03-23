const express = require('express');
const { obtenerRecetas } = require('../controllers/recetas.controller');
const router = express.Router();

router.get('/', obtenerRecetas);

module.exports = router;