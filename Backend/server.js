const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productoRoutes = require('./routers/productos');
const categoriaRoutes = require('./routers/categorias');
const ubicacionRoutes = require('./routers/ubicaciones');
const config = require('./config');

const app = express();
app.use(express.json());

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: '*', // Permite todos los orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Conectar a MongoDB
mongoose.connect(config.mongoURI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Usar las rutas del router
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/ubicaciones', ubicacionRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('mi servidor CRUD');
});

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor');
});

// Iniciar el servidor
const port = config.port;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
