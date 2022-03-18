import React, { useState } from 'react';
import ItemDetailList from './ItemDetailList';
import { getProducts, getProducts2 } from './ProductsAPI';

function ItemDetailContainer() {

  const [products, setProducts] = useState([]);
  const getProductsList = () => {
    getProducts()
    .then((result) => result.json())
    .then((products) =>{
      console.log(products);
      setProducts(products);
    });
  };

  const getProductInfo = () => {
    let array = [];
    for(let i=1; i <= 6; i++){
      getProducts2(i)
      .then((result) => result.json())
      .then((product) =>{
        console.log(product);
        array.push(product);
        setProducts([...array]);
      });
    }
  };

  return (
    <div>
      <button onClick={getProductInfo}>ver lista productos</button>
      <ItemDetailList lista={products}/>
    </div>
  )
}

export default ItemDetailContainer