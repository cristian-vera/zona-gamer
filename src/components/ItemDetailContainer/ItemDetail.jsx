import React from 'react';

function ItemDetail({product}) {
  return (
    <div>
        <img src={product.imagen} alt="" />
        <p>{product.title}</p>
        <p>Precio {product.price}</p>
        <p>{product.description}</p>
        <p>{product.detalle}</p>
    </div>
  )
}

export default ItemDetail