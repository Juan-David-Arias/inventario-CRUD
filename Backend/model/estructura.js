const mongoose = require('mongoose');

// Modelo para la coleccion de Productos
const Producto = mongoose.model('Producto', new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio_unitario: { type: Number, required: true },
  ubicacion: { type: String, required: true },
  descripcion: { type: String }
}));

// Modelo para la coleccion de Categorias
const Categoria = mongoose.model('Categoria', new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String }
}));

// Modelo para la coleccion de Ubicaciones
const Ubicacion = mongoose.model('Ubicacion', new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String }
}));


module.exports = { Producto, Categoria, Ubicacion };
