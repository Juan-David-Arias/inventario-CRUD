import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../imagen/home.jpg'; // Ruta correcta para importar la imagen
import '../styles/Inicio.css'; // Asegúrate de que esta ruta es correcta

function Home() {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${homeImg})` }}>
            <h1>Bienvenido a la Gestión de Inventarios</h1>
            <div className="button-container">
                <Link to="/productos/agregar" className="button">
                    Agregar Producto
                </Link>
                <Link to="/productos" className="button">
                    Ver Productos
                </Link>
                <Link to="/buscar" className="button">
                    Buscar Producto
                </Link>
            </div>
        </div>
    );
}

export default Home;
