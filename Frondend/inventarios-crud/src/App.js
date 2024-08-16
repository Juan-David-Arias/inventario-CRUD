import './App.css';

function App() {
  return (
    <div className="App">
        <h1>CRUD Inventarios  david</h1>

        <div className="container">
            <form id="inventory-form">
                <h2>Agregar Producto</h2>
                <label htmlFor="product-name">Nombre del Producto:</label>
                <input type="text" id="product-name" placeholder="Nombre del Producto" required />
                
                <label htmlFor="product-quantity">Cantidad:</label>
                <input type="number" id="product-quantity" placeholder="Cantidad" required />
                
                <label htmlFor="product-price">Precio:</label>
                <input type="number" id="product-price" placeholder="Precio" required />
                
                <label htmlFor="product-location">Ubicación:</label>
                <input type="text" id="product-location" placeholder="Ubicación en el Almacén" required />
                
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    </div>
  );
}

export default App;
