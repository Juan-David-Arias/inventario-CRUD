const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productoRoutes = require('./routers/productos');
const { Producto, Categoria, Ubicacion } = require('./model/productos'); // Importar modelos aqui

const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Usar las rutas del router
app.use('/api', productoRoutes);

// Ruta para ver todos los datos
app.get('/api/datos', async (req, res) => {
  try {
    const productos = await Producto.find();
    const categorias = await Categoria.find();
    const ubicaciones = await Ubicacion.find();
    
    res.json({
      productos,
      categorias,
      ubicaciones
    });
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

// Ruta para ver todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).send('Error al obtener productos');
  }
});

// Ruta para ver todas las categorias
app.get('/api/categorias', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).send('Error al obtener categorias');
  }
});

// Ruta para ver todas las ubicaciones
app.get('/api/ubicaciones', async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.find();
    res.json(ubicaciones);
  } catch (error) {
    res.status(500).send('Error al obtener ubicaciones');
  }
});

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salio mal en el servidor');
});

// Iniciar el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('mi servidor CRUD');
});
