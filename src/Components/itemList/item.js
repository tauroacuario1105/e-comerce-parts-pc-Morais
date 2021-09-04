import React, { useState } from "react";
//import { ModalItemDetail } from '../Modals/ItemDetail';
import {
  Card,
  CardGroup,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";


export const ItemList = ({ productos, id }) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  function handleShow(producto) {
    setItem(producto);
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  return (
    <section className="container my-5">
      <h2>PRODUCTOS</h2>
      <hr />
      <div className="card">
        <CardGroup>
          <Row xs={1} md={2} className="g-5">
            {productos.map((producto) => (
              <Col>
                <Card className="align-items-center">
                  <Card.Img
                    className="h-50 w-50 "
                    variant="top"
                    src={producto.img}
                  />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="white-space:nowrap">
                      {producto.descripcion.substring(0, 170) + "..."}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      className="w-100 m-1"
                      onClick={() => handleShow(producto)}
                      variant="primary"
                    >
                      <Link to={`/detail/${producto.id}`}>
                        {" "}
                        Detalle
                      </Link>
                    </Button>{" "}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </div>
    </section>
  );
};
