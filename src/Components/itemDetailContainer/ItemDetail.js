import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


export const ItemDetail = ({ img, nombre, descripcion, precio }) => {
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
        </Card.Body>
      </Card> 
    </div>
  );
};
