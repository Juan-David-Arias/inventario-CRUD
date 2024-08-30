const express = require('express');
const router = express.Router();
const { Producto } = require('../model/estructura');

// Crear un nuevo producto
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).send('Error al agregar el producto');
  }
});


// Obtener todos los productos
// router.get('/', async (req, res) => {
//   try {
//     const productos = await Producto.find();
//     res.json(productos);
//   } catch (error) {
//     res.status(500).send('Error al obtener productos');
//   }
// });





// Ruta para obtener productos por nombre exacto o todos los productos
router.get('/', async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      // Busca productos cuyo nombre coincida exactamente
      const productos = await Producto.find({ nombre: { $eq: nombre } });
      res.json(productos);
    } else {
      // Devuelve todos los productos si no se especifica nombre
      const productos = await Producto.find();
      res.json(productos);
    }
  } catch (error) {
    res.status(500).send('Error al buscar productos');
  }
});









// Actualizar un producto por ID
router.put('/:id', async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(productoActualizado || { mensaje: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).send('Error al actualizar el producto');
  }
});

// Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    res.json(productoEliminado ? { mensaje: 'Producto eliminado' } : { mensaje: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).send('Error al eliminar el producto');
  }
});

module.exports = router;
