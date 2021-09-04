import React, {useContext, useEffect, useState,} from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirdatos";
import { ItemList } from "./item";
import {  ProgressBar } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";


export const ItemListContainer = () => {

  const contexto = useContext(CartContext)

  const {catId} = useParams();

  const [data,setData]= useState([])
  const [loading, setLoading ] = useState(false)


useEffect(()=>{
  setLoading(true)

  pedirDatos(1999)

    .then(res => { 
      if (catId){
        const arrayFiltrado = res.filter(producto => producto.category === catId)
      setData( arrayFiltrado)
      }
      else{
        setData([...res])
      }
    })
    .finally(()=>{
        setLoading(false)
    })
},[catId])


return (
  <div className="container1">
    {
      loading
      ? <div><ProgressBar animated now={75} />
        </div>
      : <ItemList productos={data}/>
      }       
  </div>
)
}