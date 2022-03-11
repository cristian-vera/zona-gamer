import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

  let saludo = props.texto;

const onAdd = () => {
  console.log('agregar al carrito');
};

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer