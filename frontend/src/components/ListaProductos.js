import React, { useState, useEffect } from 'react';
import axios from '../axios'; // Asegúrate de que la configuración de axios esté correcta
import '../styles/Lista.css'; // Asegúrate de que el CSS esté en la ubicación correcta
import { Link } from 'react-router-dom';

function ListaProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchProductos() {
            try {
                const response = await axios.get('/productos');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        }
        fetchProductos();
    }, []);

    const handleEliminar = async (id) => {
        try {
            await axios.delete(`/productos/${id}`);
            setProductos(productos.filter(producto => producto._id !== id));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div className="lista-container">
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Ubicación</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto._id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio_unitario}</td>
                            <td>{producto.ubicacion}</td>
                            <td>{producto.descripcion}</td> {/* Aquí se muestra la descripción */}
                            <td>
                                <button className="eliminar" onClick={() => handleEliminar(producto._id)}>Eliminar</button>
                                <button className="actualizar">
                                    <Link to={`/productos/editar/${producto._id}`} style={{ color: 'white', textDecoration: 'none' }}>Actualizar</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaProductos;
