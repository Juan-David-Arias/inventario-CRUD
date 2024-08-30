const express = require('express');
const router = express.Router();
const { Categoria } = require('../model/estructura');

router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const categoria = new Categoria({ nombre, descripcion });
        await categoria.save();
        res.status(201).json(categoria);
    } catch (error) {
        console.error('Error al agregar la categoría:', error);
        res.status(500).json({ message: 'Error al agregar la categoría' });
    }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
});

// Obtener una categoría por ID
router.get('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la categoría:', error);
        res.status(500).json({ message: 'Error al obtener la categoría' });
    }
});

// Actualizar una categoría por ID
router.put('/:id', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const categoria = await Categoria.findByIdAndUpdate(
            req.params.id,
            { nombre, descripcion },
            { new: true }
        );
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        res.status(500).json({ message: 'Error al actualizar la categoría' });
    }
});

// Eliminar una categoría por ID
router.delete('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndDelete(req.params.id);
        if (categoria) {
            res.status(200).json({ message: 'Categoría eliminada' });
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        res.status(500).json({ message: 'Error al eliminar la categoría' });
    }
});

module.exports = router;
