import React, { useEffect } from "react";
import { useParams,   } from "react-router-dom";
import { useState, } from "react";
import { ItemDetail } from "../itemDetailContainer/ItemDetail";
import { getFirestore } from "../../firebase/Config";

export const ItemDetailContainer = () => {
  const [loading, setLoading ] = useState(false)
    const { itemId } = useParams();
    const [ item, setItem]= useState(null)
     
    useEffect(()=>{
      setLoading(true)
      const db = getFirestore();
      const productos = db.collection('productos')
      const item = productos.doc(itemId)
    
      item.get().then ((doc) => {
        setItem({...doc.data(), id: doc.id})
      })
    },
   [itemId, setLoading])
   console.log(item)
    return(
      
        <div>
           {item && <ItemDetail {...item}/>}
        </div>
    )}
