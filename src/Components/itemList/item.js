import React from "react";
import {Card,CardGroup,Col,Row,} from "react-bootstrap";
import { Link } from "react-router-dom";


export const ItemList = ({ productos,id}) => {



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
                      <Link class="btn btn-primary btn-lg w-100" to={`/detail/${producto.id}`}>
                        {" "}
                        Detalle
                      </Link>
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
