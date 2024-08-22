const express = require('express');
const router = express.Router();
const { Categoria } = require('../model/estructura');

/**
 * @openapi
 * /api/categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *   post:
 *     summary: Crear una nueva categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *   put:
 *     summary: Actualizar una categoría existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada
 *       404:
 *         description: Categoría no encontrada
 *   delete:
 *     summary: Eliminar una categoría existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoría eliminada
 *       404:
 *         description: Categoría no encontrada
 */
router.post('/', async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    const categoriaGuardada = await nuevaCategoria.save();
    res.status(201).json(categoriaGuardada);
  } catch (error) {
    console.error('Error al agregar la categoría:', error);
    res.status(500).send('Error al agregar la categoría');
  }
});

router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).send('Error al obtener categorías');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoriaActualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(categoriaActualizada || { mensaje: 'Categoría no encontrada' });
  } catch (error) {
    res.status(500).send('Error al actualizar la categoría');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
    res.json(categoriaEliminada ? { mensaje: 'Categoría eliminada' } : { mensaje: 'Categoría no encontrada' });
  } catch (error) {
    res.status(500).send('Error al eliminar la categoría');
  }
});

module.exports = router;
