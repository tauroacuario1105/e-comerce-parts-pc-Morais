import React, { useEffect } from "react";

import { useParams,   } from "react-router-dom";
import { useState, } from "react";
import { ItemDetail } from "../itemDetailContainer/ItemDetail";
import { pedirDatos } from "../../helpers/pedirdatos";




export const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [ item, setItem]= useState(null)

     
   useEffect(() =>{
    pedirDatos()
    .then(res =>{
      setItem( res.find( producto => producto.id === parseInt (itemId)))
    } 
      )
   },
   [itemId])
    return(
      
        <div>
           {item && <ItemDetail {...item}/>}
        </div>
    )}
