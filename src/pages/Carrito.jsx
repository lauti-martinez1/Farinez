import React, { useState } from "react";
import '../styles/Carrito.css';
import { images } from '../assets/imagenes';

function Carrito({ carrito, eliminarDelCarrito,aumentarCantidad, disminuirCantidad }) {
    
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  return (
    <>
        <div className="Home">
                <div className="Cuadro-datos">
                    
                    <nav className="datos">
                        
                        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); }} >
                            
                            <input className="form-control mr-sm-2" type="search" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <input className="form-control mr-sm-2" type="search" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                            <input className="form-control mr-sm-2" type="search" placeholder="Codigo postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                        
                        </form>
                    </nav>
                </div>

                <h2>Tu carrito</h2>

                <div className="Productos-total">
                        

                        <div className="Cuadro-productos">
                                <div>
                                    <div>
                                        {carrito.length === 0 ? (
                                            <h5>Tu carrito está vacío</h5>
                                        ) : (
                                            <div className="producto-carrito">
                                            {carrito.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.imagen} alt={item.nombre} style={{ width: '30%', height: 'auto' }} />
                                                    {item.nombre}  ${item.precio}
                                                     
                                                    <div className="botones-carrito">
                                                            <img src={images.Menos} alt="menos" style={{ width: '15%', height: '15%' }} onClick={() => disminuirCantidad(item.id)}/>
                                                            <img src={images.Mas} alt="mas" style={{ width: '15%', height: '15%' }} onClick={() => aumentarCantidad(item.id)}/>

                                                            <span>{item.cantidad}</span>
                                                    </div>
                                                    
                                                    <img src={images.Basura} alt="Eliminar" style={{ width: '10%', height: '10%' }} onClick={() => eliminarDelCarrito(item.id)} className="basura"/>


                                                </div>
                                            ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                        </div>

                        <div className="Cuadro-total">
                       
                             <h4>Subtotal: ${carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h4>

                                <h4>Costo de envio: __________</h4>
                                <h4>Total: __________</h4>
                        </div>
                </div>


            <button className="btn btn-dark boton-finalizar" type="submit">Finalizar compra</button>
        </div>
    
    </>
   );
}

export default Carrito;

