import { createContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

//creacion del contexto
export const CartContext = createContext()

//custom provider

export const CartProvaider =({children})=>{
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (producto)=>{
      setCarrito([
        ...carrito,
        producto
      ])
    }
      const eliminarDelCarrito = (id) =>{
        setCarrito( carrito.filter (producto => producto.id !== id))
      }

    const cantidadCarrito = () =>{ 
      return carrito.reduce((acc,producto) => acc + producto.cantidad,0)}
    const vaciarCarrito = () =>{ 
      setCarrito([])
    }

    const isInCart = (id) => {
      return carrito.some(el => el.id == id)
    }

    return(
        <CartContext.Provider value={{carrito,isInCart,agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}