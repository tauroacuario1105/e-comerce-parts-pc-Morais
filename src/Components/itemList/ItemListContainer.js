import React, {useEffect, useState} from "react";
import { stock } from "../../data/stock";
import { pedirDatos } from "../../helpers/pedirdatos";
import { ItemList } from "./item";


export const ItemListContainer = () => {

  const [data,setData]= useState([])
  const [loading, setLoading ] = useState(false)

useEffect(()=>{
  setLoading(true)
  pedirDatos(1999)
    .then(res => { 
      setData([...res])
    })
    .finally(()=>{
        setLoading(false)
    })
},[])


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