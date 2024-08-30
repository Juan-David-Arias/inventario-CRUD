import React, { useState, useEffect } from 'react';
import axios from '../axios'; // Asegúrate de que esta ruta es correcta
import '../styles/Detalles.css'; // Asegúrate de que esta ruta es correcta
import { useParams } from 'react-router-dom';

function DetallesProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        async function fetchProducto() {
            try {
                const response = await axios.get(`/productos/${id}`);
                setProducto(response.data);
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
                setCargando(false);
            }
        }
        fetchProducto();
    }, [id]);

    if (cargando) {
        return <div>Cargando...</div>;
    }

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="detalles-container">
            <h2>Detalles del Producto</h2>
            <p><strong>Nombre:</strong> {producto.nombre}</p>
            <p><strong>Cantidad:</strong> {producto.cantidad}</p>
            <p><strong>Precio:</strong> {producto.precio_unitario}</p>
            <p><strong>Ubicación:</strong> {producto.ubicacion}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
        </div>
    );
}

export default DetallesProducto;
