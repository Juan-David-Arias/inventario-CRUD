import React, { useState, useEffect } from 'react';
import axios from '../axios'; // Asegúrate de que esta ruta es correcta
import '../styles/form.css'; // Asegúrate de que esta ruta es correcta
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate

function ActualizarProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState({
        nombre: '',
        cantidad: '',
        precio_unitario: '',
        ubicacion: '',
        descripcion: '' // Campo adicional
    });
    const navigate = useNavigate(); // Inicializar useNavigate

    useEffect(() => {
        async function fetchProducto() {
            try {
                const response = await axios.get(`/productos/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        }
        fetchProducto();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/productos/${id}`, producto);
            alert('Producto actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            alert('Error al actualizar el producto');
        }
    };

    return (
        <div className="container">
            <form id="inventory-form" onSubmit={handleSubmit}>
                <h2>Actualizar Producto</h2>
                <label htmlFor="product-name">Nombre del Producto:</label>
                <input
                    type="text"
                    id="product-name"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    placeholder="Nombre del Producto"
                    required
                />
                <label htmlFor="product-quantity">Cantidad:</label>
                <input
                    type="number"
                    min={0}
                    id="product-quantity"
                    name="cantidad"
                    value={producto.cantidad}
                    onChange={handleChange}
                    placeholder="Cantidad"
                    required
                />
                <label htmlFor="product-price">Precio:</label>
                <input
                    type="number"
                    id="product-price"
                    name="precio_unitario"
                    value={producto.precio_unitario}
                    onChange={handleChange}
                    placeholder="Precio"
                    required
                />
                <label htmlFor="product-location">Ubicación:</label>
                <input
                    type="text"
                    id="product-location"
                    name="ubicacion"
                    value={producto.ubicacion}
                    onChange={handleChange}
                    placeholder="Ubicación en el Almacén"
                    required
                />
                <label htmlFor="product-description">Descripción:</label>
                <textarea
                    id="product-description"
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    placeholder="Descripción del Producto"
                />
                <button type="submit">Actualizar Producto</button>
                <button type="button" onClick={() => navigate('/')}>Regresar al Menú</button> {/* Botón para regresar */}
            </form>
        </div>
    );
}

export default ActualizarProducto;
