const express = require('express');
const router = express.Router();
const { Ubicacion } = require('../model/estructura');

/**
 * @openapi
 * /api/ubicaciones:
 *   get:
 *     summary: Obtener todas las ubicaciones
 *     responses:
 *       200:
 *         description: Lista de ubicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   direccion:
 *                     type: string
 *   post:
 *     summary: Crear una nueva ubicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ubicación creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 direccion:
 *                   type: string
 *   put:
 *     summary: Actualizar una ubicación existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ubicación a actualizar
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
 *               direccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ubicación actualizada
 *       404:
 *         description: Ubicación no encontrada
 *   delete:
 *     summary: Eliminar una ubicación existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ubicación a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ubicación eliminada
 *       404:
 *         description: Ubicación no encontrada
 */
router.post('/', async (req, res) => {
  try {
    const nuevaUbicacion = new Ubicacion(req.body);
    const ubicacionGuardada = await nuevaUbicacion.save();
    res.status(201).json(ubicacionGuardada);
  } catch (error) {
    console.error('Error al agregar la ubicación:', error);
    res.status(500).send('Error al agregar la ubicación');
  }
});

router.get('/', async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.find();
    res.json(ubicaciones);
  } catch (error) {
    res.status(500).send('Error al obtener ubicaciones');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ubicacionActualizada = await Ubicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ubicacionActualizada || { mensaje: 'Ubicación no encontrada' });
  } catch (error) {
    res.status(500).send('Error al actualizar la ubicación');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const ubicacionEliminada = await Ubicacion.findByIdAndDelete(req.params.id);
    res.json(ubicacionEliminada ? { mensaje: 'Ubicación eliminada' } : { mensaje: 'Ubicación no encontrada' });
  } catch (error) {
    res.status(500).send('Error al eliminar la ubicación');
  }
});

module.exports = router;
