import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const APIURL = "https://6233ec14373284533dfa7c78.mockapi.io/productos";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  
  const {itemId} = useParams();
  console.log(itemId);

  useEffect(() =>{
    const getProductsDetail = () => {
          setTimeout(() =>{
            fetch(`${APIURL}`)
            .then((result) => result.json())
            .then((data) =>{
            setProducts(data);
            console.log(data);
          });
        },2000);
      };
      getProductsDetail();
  },[]);

  console.log(products);

  return (
    <div>
      {products.map((product) => <ItemDetail product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemDetailContainer