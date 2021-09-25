import { getFirestore } from "../firebase/Config";
import firebase from "firebase/app";
import "firebase/firestore";

export const generarOrden = (buyer, carrito, total) => {
  return new Promise(async (resolve, reject) => {
    const db = getFirestore();

    //creo bach para actualizaccion del stock en firebase
    const itemToUpdate = db.collection("productos").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      carrito.map((producto) => producto.id)
    );

    const batch = db.batch();
    const query = await itemToUpdate.get();

    const outOftock = [];
    query.docs.forEach((doc) => {
      const itemInCart = carrito.find((el) => el.id === doc.id);
      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
        });
      } else {
        outOftock.push({ id: doc.id, ...doc.data });
      }
    });
    // commit del batch si hay stock disponible
    if (outOftock.length === 0) {
      batch.commit();
    } else {
      reject({
        error: "Producto sin stock",
        sinStock: outOftock,
      });
    }

    const ordenes = db.collection("ordenes");
    const newOrder = {
      buyer: buyer,
      item: carrito,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    //carrito.forEach((producto) => {
    //const docRef = db.collection('productos').doc(producto.id)

    //docRef.get()
    //.then(doc =>{
    //    const actualizar = docRef.update({
    //        stock: doc.data().stock - producto.stock
    //    })
    //    actualizar.then((res) => console.log(res))
    //})
    //});

    ordenes
      .add(newOrder)
      .then((res) => {
        resolve(res.id);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
