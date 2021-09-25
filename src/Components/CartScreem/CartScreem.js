import React, { useContext,  } from "react";
import { CartContext } from "../../Context/CartContext";
import {FaTrash} from "react-icons/fa"
import { Link } from "react-router-dom";



export const CartScreem = () =>{

    const { carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return(
        <div className="container my-5">
            <h1>Resumen de compra</h1>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>cantidad: {producto.cantidad}</p>
                    <p>Precio: S/.{producto.precio * producto.cantidad}</p>
                    <button><FaTrash onClick={() => eliminarDelCarrito (producto.id)}/></button>
                    <hr/>
                </div>
            ))}
            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to="/checkout">
                <button className="btn btn-success mx3">
                    Terminar compra
                </button>
            </Link>

        </div>
    )}