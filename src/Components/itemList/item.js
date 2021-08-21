import React from 'react'

export const ItemList = ({productos}) => {

    return(
         <secction className="container my-5">
             <h2>PRODCUTOS</h2>
             <hr/>
             <div className="row">
                 {productos.map((producto)=>(
                     <div className="Container">
                        <li key={producto.id} className="card col-4">
                        <h3>{producto.nombre}</h3>
                        <img className="imgItem" src={producto.img} alt={producto.nombre}/>
                        <p>{producto.precio}</p>
                        <p>{producto.descripcion}</p>
                        </li>
                    </div>
                 ))}

             </div>
         </secction>
    )
}

