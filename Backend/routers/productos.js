const express = require('express');
const router = express.Router();
const { Producto, Categoria, Ubicacion } = require('../model/productos');

///POST 

// Crear un nuevo producto
router.post('/productos', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).send('Error al agregar el producto');
  }
});

// Agregar una nueva categoria
router.post('/categorias', async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    const categoriaGuardada = await nuevaCategoria.save();
    res.status(201).json(categoriaGuardada);
  } catch (error) {
    console.error('Error al agregar la categoria:', error);
    res.status(500).send('Error al agregar la categoria');
  }
});

// Agregar una nueva ubicacion
router.post('/ubicaciones', async (req, res) => {
  try {
    const nuevaUbicacion = new Ubicacion(req.body);
    const ubicacionGuardada = await nuevaUbicacion.save();
    res.status(201).json(ubicacionGuardada);
  } catch (error) {
    console.error('Error al agregar la ubicacion:', error);
    res.status(500).send('Error al agregar la ubicacion');
  }
});

///PUT

// Actualizar un producto
router.put('/productos/:id', async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(productoActualizado || { mensaje: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).send('Error al actualizar el producto');
  }
});

// Actualizar una categoria
router.put('/categorias/:id', async (req, res) => {
  try {
    const categoriaActualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(categoriaActualizada || { mensaje: 'Categoria no encontrada' });
  } catch (error) {
    res.status(500).send('Error al actualizar la categoria');
  }
});

// Actualizar una ubicacion
router.put('/ubicaciones/:id', async (req, res) => {
  try {
    const ubicacionActualizada = await Ubicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ubicacionActualizada || { mensaje: 'Ubicacion no encontrada' });
  } catch (error) {
    res.status(500).send('Error al actualizar la ubicacion');
  }
});

///DELETE

// Eliminar un producto
router.delete('/productos/:id', async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    res.json(productoEliminado ? { mensaje: 'Producto eliminado' } : { mensaje: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).send('Error al eliminar el producto');
  }
});

// Eliminar una categoria
router.delete('/categorias/:id', async (req, res) => {
  try {
    const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
    res.json(categoriaEliminada ? { mensaje: 'Categoria eliminada' } : { mensaje: 'Categoria no encontrada' });
  } catch (error) {
    res.status(500).send('Error al eliminar la categoria');
  }
});

// Eliminar una ubicacion
router.delete('/ubicaciones/:id', async (req, res) => {
  try {
    const ubicacionEliminada = await Ubicacion.findByIdAndDelete(req.params.id);
    res.json(ubicacionEliminada ? { mensaje: 'Ubicacion eliminada' } : { mensaje: 'Ubicacion no encontrada' });
  } catch (error) {
    res.status(500).send('Error al eliminar la ubicacion');
  }
});

module.exports = router;
