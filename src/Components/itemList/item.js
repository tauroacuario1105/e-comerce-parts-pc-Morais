import React, { useState } from "react";
//import { ModalItemDetail } from '../Modals/ItemDetail';
import { Card, CardGroup, Col, Row, Button, Modal,Image,Container } from "react-bootstrap";


export const ItemList = ({ productos }) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([])
  
  function handleShow (producto){
      setItem(producto)
      setShow(true)
  };
  function handleClose (){
    setShow(false)
};

  return (
    <section className="container my-5">
      <h2>PRODCUTOS</h2>
      <hr />
      <div className="card">
        <CardGroup >
          <Row xs={1} md={2} className="g-5">
            {productos.map((producto) => (
              <Col >
                <Card className="align-items-center">
                  <Card.Img className="h-50 w-50 " variant="top" src={producto.img} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="white-space:nowrap">{producto.descripcion.substring(0,170)+'...'}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      className="w-100 m-1"
                      onClick={() => handleShow(producto)}
                      variant="primary"
                    >
                      Detalle
                    </Button>{" "}
                    <Button className="w-100 m-1" variant="primary">
                      Añadir al Carrito
                    </Button>{" "}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="mx"
        >
          <Modal.Header closeButton>
            <Modal.Title>{item.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid justify-content-center" >
          <Image className="w-75 h-50" variant="top" src={item.img} rounded />
          <Container>
            <Col>
                <Col xs={12} md={8} className="align-items-center">
                {item.descripcion}
                </Col>
                <Col xs={6} md={4} className="align-items-center">
                <hr/>
                PRECIO : {item.precio}
                </Col>
            </Col>
          </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};
