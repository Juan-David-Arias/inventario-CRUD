import React, { useState } from 'react';
import axios from '../axios'; // Asegúrate de que esta ruta es correcta
import '../styles/form.css'; // Asegúrate de que esta ruta es correcta
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import logo from '../imagen/bewe.jpg'; // Importar el logo

function FormularioProducto() {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [descripcion, setDescripcion] = useState(''); // Campo adicional
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/productos', {
                nombre,
                cantidad,
                precio_unitario: precio,
                ubicacion,
                descripcion, // Incluir el campo descripcion
            });
            alert('Producto agregado correctamente');
            setNombre('');
            setCantidad('');
            setPrecio('');
            setUbicacion('');
            setDescripcion(''); // Limpiar el campo descripcion
            navigate('/'); // Redirigir al Home después de agregar el producto
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            alert('Error al agregar el producto');
        }
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <form id="inventory-form" onSubmit={handleSubmit}>
                <h2>Agregar Producto</h2>
                <label htmlFor="product-name">Nombre del Producto:</label>
                <input
                    type="text"
                    id="product-name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre del Producto"
                    required
                />
                <label htmlFor="product-quantity">Cantidad:</label>
                <input
                    type="number"
                    min={0}
                    id="product-quantity"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    placeholder="Cantidad"
                    required
                />
                <label htmlFor="product-price">Precio:</label>
                <input
                    type="number"
                    id="product-price"
                    min={0}
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="Precio"
                    required
                />
                <label htmlFor="product-location">Ubicación:</label>
                <input
                    type="text"
                    id="product-location"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    placeholder="Ubicación en el Almacén"
                    required
                />
                <label htmlFor="product-description">Descripción:</label>
                <textarea
                    id="product-description"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción del Producto"
                />
                <button type="submit">Agregar Producto</button>
                <button type="button" onClick={() => navigate('/')}>Regresar al Menú</button> {/* Botón para regresar */}
            </form>
        </div>
    );
}

export default FormularioProducto;
