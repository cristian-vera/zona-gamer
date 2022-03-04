import React from 'react';

const ItemListContainer = (props) => {

  let saludo = props.texto;

  return (
    <div>
      <h2>{saludo}</h2>
    </div>
  )
}

export default ItemListContainer