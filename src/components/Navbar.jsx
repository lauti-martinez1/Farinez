import React,{useState} from "react";
import Logo from "../assets/Logo.png"
import Carrito from "../assets/carrito.png"
import { Link } from "react-router-dom";
import '../styles/Navbar.css'


function Navbar({ carrito }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
      <div className="container-fluid">
        <Link to="/" className="nav-link">
          <img src={Logo} width={150} height={70} />
        </Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link to="/Productos" className="nav-link">Productos</Link>
            </li>

            <li className="nav-item">
              <Link to="/Recetas" className="nav-link">Recetas</Link>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => setMostrarCarrito(prev => !prev)}>
                <img src={Carrito} width={30} height={30} alt="Carrito" />
                <span>({carrito.length})</span>
              </button>
            </li>

            {mostrarCarrito && (
              <div className="carrito">
                <div className="carrito-info">
                  {carrito.length === 0 ? (
                    <h5>Tu carrito está vacío</h5>
                  ) : (
                    <div  className="producto-carrito">
                      {carrito.map((item, index) => (
                        <div key={index}>
                          <img src={item.imagen} alt={item.nombre} style={{ width: '30%', height: 'auto' }} />
  
                          {item.nombre}  ${item.precio}
                          
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/Carrito">
                    <button className="btn btn-dark">Ir al carrito</button>
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;