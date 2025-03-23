const express = require('express');
const { obtenerRecetas, obtenerRecetaPorId } = require('../controllers/recetas.controller');
const router = express.Router();

/**
 * @swagger
 * /api/recetas:
 *   get:
 *     summary: Obtener todas las recetas o filtrarlas
 *     description: Devuelve una lista de recetas. Se puede filtrar por nombre o ingredientes.
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Nombre de la receta a buscar
 *       - in: query
 *         name: ingrediente
 *         schema:
 *           type: string
 *         description: Filtrar recetas que contengan este ingrediente
 *       - in: query
 *         name: cantidad
 *         schema:
 *           type: integer
 *         description: Filtrar recetas donde el ingrediente tenga al menos esta cantidad
 *     responses:
 *       200:
 *         description: Lista de recetas
 *       400:
 *         description: Error en los parámetros de búsqueda
 */
router.get('/', obtenerRecetas);


/**
 * @swagger
 * /api/recetas/{id}:
 *   get:
 *     summary: Obtener una recetas por su id
 *     description: Devuelve receta.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         description: ID de la receta a buscar
 *     responses:
 *       200:
 *         description: Info de la receta
 *       400:
 *         description: Error en los parámetros de búsqueda
 */
router.get('/:id', obtenerRecetaPorId);

module.exports = router;