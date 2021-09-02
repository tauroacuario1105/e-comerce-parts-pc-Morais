import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { stock } from "../../data/stock";
import { pedirDatos } from "../../helpers/pedirdatos";
import { ItemList } from "./item";


export const ItemListContainer = () => {
  const {catId} = useParams();
   console.log(catId)


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
      ? <p>loading...</p>
      : <ItemList productos={data}/>
      }       
  </div>
)
}