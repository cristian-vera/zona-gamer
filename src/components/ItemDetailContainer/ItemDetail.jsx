import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

const onAdd = () => {
  console.log('agregar al carrito');
};

  return (
    <div className="card_detailMain">
      <div className="card_detailContent">
        <div>
          <img src={product.imagen} alt="" />
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
        <div className="card_detailSubcontent">
          <h3>{product.title}:</h3>
          <p>{product.detalle}</p>
          <p>Precio: $ {product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail