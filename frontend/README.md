# Inventario de Productos

Este proyecto es una aplicación web para gestionar el inventario de productos. Permite agregar, eliminar, actualizar y visualizar productos, y se organiza con un **frontend** desarrollado en **React** y un **backend** basado en **Node.js** y **Express** con **MongoDB** como base de datos.

## 1. Estructura del Proyecto

- **backend**: Contiene el servidor Express y la configuración de la base de datos MongoDB.
- **frontend**: Contiene la aplicación React que se comunica con el backend.

## 2. Configuración del Backend

1. Navega a la carpeta `backend`:

    ```bash
    cd backend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

    ```env
    MONGO_URI=mongodb://localhost:27017/inventarios
    PORT=3001
    ```

4. Inicia el servidor:

    ```bash
    npm start
    ```

   El servidor se iniciará en `http://localhost:3001`.

## 3. Configuración del Frontend

1. Navega a la carpeta `frontend`:

    ```bash
    cd frontend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Asegúrate de que el archivo `axios.js` en `frontend/src` esté configurado con la URL base correcta:

    ```javascript
    import axios from 'axios';

    const instance = axios.create({
      baseURL: 'http://localhost:3001/api'
    });

    export default instance;
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

   La aplicación se iniciará en `http://localhost:3000`.

## 4. Uso

- **Agregar Producto**: Permite agregar un producto nuevo con nombre, cantidad, precio, ubicación y descripción.
- **Ver Productos**: Muestra la lista de productos en una tabla con opciones para actualizar o eliminar.
- **Buscar Productos**: Filtra productos dentro de la lista.
- **Actualizar Producto**: Permite modificar los datos de un producto existente.
- **Eliminar Producto**: Elimina un producto de la base de datos.

## 5. Tecnologías Utilizadas

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Material-UI


7. Endpoints del Backend
Productos

    GET /productos: Obtiene la lista de productos.
    POST /productos: Agrega un nuevo producto.
    PUT /productos/:id: Actualiza un producto por ID.
    DELETE /productos/:id: Elimina un producto por ID.

8. Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

    Realiza un fork del repositorio.
    Crea una rama para tu característica o corrección de errores.
    Realiza un pull request con una descripción clara de los cambios.

9. Licencia