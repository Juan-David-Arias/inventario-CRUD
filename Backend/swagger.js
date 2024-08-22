// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventario CRUD API',
      version: '1.0.0',
      description: 'API para gestionar inventarios.',
    },
  },
  apis: ['./routers/*.js'], // Ruta a tus archivos de rutas dentro de la carpeta backend
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
