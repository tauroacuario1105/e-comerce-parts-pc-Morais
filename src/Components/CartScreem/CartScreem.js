import React, { useContext,  } from "react";
import { CartContext } from "../../Context/CartContext";
import {BsFillTrashFill} from "react-icons/bs"



export const CartScreem = () =>{

    const { carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return(
        <div>
            <h1>resumen de compra</h1>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>cantidad: {producto.cantidad}</p>
                    <p>Precio: {producto.precio * producto.cantidad}</p>
                    <button><BsFillTrashFill onClick={() => eliminarDelCarrito (producto.id)}/></button>
                </div>
            ))}
            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

        </div>
    )}