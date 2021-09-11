import React from "react";
import { Link } from "react-router-dom";

export const Counter = ({ max, cantidad, setCantidad, agregar, agregado }) => {
  console.log(agregado);

  const handleSumar = () => {
    if (cantidad < max) setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <>
      <div className="d-flex">
        <button className="btn btn-primary mx-1" disabled={agregado} onClick={handleRestar}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="btn btn-primary mx-1" disabled={agregado} onClick={handleSumar}>
          +
        </button>
        <button className="btn btn-outline-primary mx-1" disabled={agregado} onClick={agregar}>
          Agregar a Carrito
        </button>
        <Link to="/" className="btn btn-outline-primary mx-1">
          Volver
        </Link>
        
          <button disabled={!agregado} className="btn btn-success" >
          <Link to="/cart"> Terminar mi compra</Link>
          </button>
        
      </div>
    </>
  );
};
