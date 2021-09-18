import React, { useEffect, useState,} from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./item";
import {  ProgressBar } from "react-bootstrap";
import { getFirestore } from "../../firebase/Config";


export const ItemListContainer = () => {
  const {catId} = useParams();

  const [data,setData]= useState([])
  const [loading, setLoading ] = useState(false)

 
useEffect(()=>{
  setLoading(true)
    const db = getFirestore();
    const productos = db.collection('productos')

    if(catId){
      const filtrado = productos.where('category','==', catId)
      filtrado.get()
          .then((response) => {
            const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setData(data)
          })
          .finally(()=>{
            setLoading(false)})
    }
    else{
         productos.get().then ((response) => {
        const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setData(data)
        
      })
      .finally(()=>{
      setLoading(false)})
    }
},[catId, setLoading])


return (
  <>
    {
      loading
      ? <div><ProgressBar animated now={75} />
        </div>
      : <ItemList productos={data}/>
      }       
  </>
)
}