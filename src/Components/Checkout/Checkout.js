import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../Context/CartContext";
import { generarOrden } from "../../firebase/ConfigurarOrden";
import Swal from "sweetalert2";

export const Checkout = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

  const [values, setvalues] = useState({
    nombre: "gianfranco",
    email: "gianfranco@gmail.com",
    tel: 94847532,
  });
  

  const handleInputChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarOrden(values, carrito, totalCarrito())
      .then((res) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Su compra a sido realizada",
          text: `Guarde este identificador: ${res}`,
          confirmButtonText: "OK",
        });
        vaciarCarrito();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ha ocurrido un error",
          footer: '<a href="">ok</a>',
        });
      });
  };


  return (
    <div className="checkout">
      <div className="CardDetail" style={{ width: "35rem", height: "35rem"}}>
      <h2>Orden de Compra</h2>
      <hr />

      {!carrito.length ? (
        <Redirect to="/" />
      ) : (
        <div>
          
          <form className="box" onSubmit={handleSubmit}>
          <label for="fname">Nombre:</label>
            <input
              type="text"
              value={values.nombre}
              onchange={handleInputChange}
              name="nombre"
              required
            />
            <label for="fname">Celular:</label>
            <input
              type="tel"
              value={values.tel}
              onchange={handleInputChange}
              name="tel"
              required
            />
            <label for="fname">Email:</label>
            <input
              type="email"
              value={values.email}
              onchange={handleInputChange}
              name="email"
              required
            />
            <hr/>
            <button type="submit">Submit</button>
          </form>
          
        </div>
      )}
    </div>
    </div>
  );
};
