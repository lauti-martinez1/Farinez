import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Recetas from './pages/Recetas';
import Carrito from './pages/Carrito';
import DetalleReceta from './pages/DetalleReceta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Router>
      <Navbar carrito={carrito} />
      
      <Routes>
        <Route path='/' element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/Productos' element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/Recetas' element={<Recetas />} />
        <Route path='/Carrito' element={<Carrito carrito={carrito} />} />
        <Route path="/Recetas/:id" element={<DetalleReceta />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
