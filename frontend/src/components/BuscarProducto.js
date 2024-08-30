import React, { useState } from 'react';
import axios from '../axios'; // Asegúrate de que la instancia de axios esté configurada correctamente
import '../styles/Buscar.css';

function Buscar() {
    const [query, setQuery] = useState('');
    const [productos, setProductos] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            // Realiza la búsqueda por nombre exacto
            const response = await axios.get(`/productos`, {
                params: { nombre: query }
            });
            setProductos(response.data);
        } catch (error) {
            console.error('Error al buscar productos:', error);
            setProductos([]);
        }
    };

    return (
        <div className="buscar-container">
            <h2>Buscar Productos</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Ingrese nombre"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
            <div className="resultados">
                {productos.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Ubicación</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(producto => (
                                <tr key={producto._id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.precio_unitario}</td>
                                    <td>{producto.ubicacion}</td>
                                    <td>{producto.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </div>
        </div>
    );
}

export default Buscar;
