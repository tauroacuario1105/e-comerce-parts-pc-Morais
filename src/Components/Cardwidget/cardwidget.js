import React, {useContext} from "react";
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const CardWidget= () =>{
    const {cantidadCarrito} =   useContext(CartContext)

    return (
        
            <Link to ="/cart">
                <div className="carrito">
            <FaShoppingCart/>
            <span>{cantidadCarrito()}</span>
            </div>
            </Link>
        
    )
}