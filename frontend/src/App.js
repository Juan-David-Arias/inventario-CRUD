import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormularioProducto from './components/FormularioProducto';
import ListaProductos from './components/ListaProductos';
import ActualizarProducto from './components/ActualizarProducto';
import BuscarProducto from './components/BuscarProducto'; // Importar el nuevo componente
import './styles/Inicio.css'; // Asegúrate de que esta ruta es correcta
import './styles/Lista.css'; // Asegúrate de que esta ruta es correcta
import './styles/form.css'; // Asegúrate de que esta ruta es correcta


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<ListaProductos />} />
                <Route path="/productos/agregar" element={<FormularioProducto />} />
                <Route path="/productos/editar/:id" element={<ActualizarProducto />} />
                <Route path="/buscar" element={<BuscarProducto />} /> {/* Agregar ruta de búsqueda */}
            </Routes>
        </Router>
    );
}

export default App;
