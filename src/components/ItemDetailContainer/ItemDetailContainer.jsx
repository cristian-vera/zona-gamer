import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

const APIURL = "https://6233ec14373284533dfa7c78.mockapi.io/productos";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    let array = [];
    const getProductsDetail = (id) => {
          setTimeout(() =>{
            fetch(`${APIURL}/${id}`)
            .then((result) => result.json())
            .then((data) =>{
            array.push(data);
            setProducts(array);
          });
        },2000);
      };
      getProductsDetail(2);
  },[]);

  console.log(products);

  return (
    <div>
      {products.map((product) => <ItemDetail product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemDetailContainer