const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productoRoutes = require('./routers/productos');
const categoriaRoutes = require('./routers/categorias');
const ubicacionRoutes = require('./routers/ubicaciones');
const { swaggerUi, swaggerSpec } = require('./swagger'); // Importar desde la raíz del proyecto

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
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/ubicaciones', ubicacionRoutes);

// Configurar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
