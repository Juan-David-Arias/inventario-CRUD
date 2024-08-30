const express = require('express');
const router = express.Router();
const { Ubicacion } = require('../model/estructura');

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
