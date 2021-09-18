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
    <div>
      <h2>Checkout</h2>
      <hr />

      {!carrito.length ? (
        <Redirect to="/" />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={values.nombre}
              onchange={handleInputChange}
              name="nombre"
              required
            />
            <input
              type="tel"
              value={values.tel}
              onchange={handleInputChange}
              name="tel"
              required
            />
            <input
              type="email"
              value={values.email}
              onchange={handleInputChange}
              name="email"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};
