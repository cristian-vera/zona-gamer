import React from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailList({lista}) {
  return (
    <div>
        {lista.map((product) =><ItemDetail product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemDetailList