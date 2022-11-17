import { useEffect, useState } from "react";
import data from '../data/data';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const promesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(data);
      },2000)
  })

  useEffect(() => {
    console.log('data');
    promesa.then((respuesta)=>{
      setProductList(respuesta)
    });
    setTimeout(()=>{
      console.log(productList);
    }, 3000)
  },[productList]);



  return (
    <div style={{display:'flex', justifyContent:'space-around', marginTop:'2rem'}}>
      
      <ItemList productList={productList}/>
    </div>
    
  )
}

export default ItemListContainer;
