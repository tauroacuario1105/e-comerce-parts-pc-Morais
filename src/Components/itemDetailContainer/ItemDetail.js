import React, { useContext, useState,} from "react";
import { Card } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import { Counter } from "../Counter/Counter";


export const ItemDetail = ({ id, category, img, nombre, descripcion, precio, stock, }) => {


  const {agregarAlCarrito,isInCart}= useContext(CartContext)


  const [cantidad, setCantidad] = useState(1)

  //Agregar al carrito

  const HandleAdd = () => {
      agregarAlCarrito({
        id, category, img, nombre, descripcion, precio, cantidad,stock
      })
  }
  

  return (
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
          {descripcion}
          </Card.Text>
          <Card.Text>
          {precio}
          </Card.Text>
          <Counter max = {stock} 
          cantidad={cantidad} 
          setCantidad={setCantidad} 
          agregar={HandleAdd} 
          agregado={isInCart(id)}/>
        </Card.Body>
      </Card> 

      
    </div>
  );
};
