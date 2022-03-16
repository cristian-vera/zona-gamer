import React from 'react';
import "./ItemListContainer.css";
import ItemList from './ItemList';

const ItemListContainer = (props) => {

  let saludo = props.texto;

  return (
    <div className="container_main">
      <div>
        <h2>{saludo}</h2>
      </div>
      <div>
        <ItemList/>
      </div>
    </div>
  )
}

export default ItemListContainer