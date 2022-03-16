import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css";

const Item = ({producto}) => {

const onAdd = () => {
  console.log('agregar al carrito');
};
  
  return (
    <div className="card_main">
      <div className="card_content">
        <img src={producto.img} alt="" />
        <div className="card_subContent">
          <p>{producto.title}</p>
          <p>Precio: $ {producto.price}</p>
          <p>{producto.description}</p>
        </div>
        <div className="verMas">
          <button>Ver Más</button>
        </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default Item