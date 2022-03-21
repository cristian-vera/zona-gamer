import React from 'react';
import "./Item.css";

const Item = ({producto}) => {
  
  return (
    <div className="card_main">
      <div className="card_content">
        <img src={producto.img} alt="" />
        <div className="card_subContent">
          <p className="card_titulo">{producto.title}</p>
          <p>Precio: $ {producto.price}</p>
          <p>{producto.description}</p>
        </div>
        <div className="verMas">
          <button>Ver Más</button>
        </div>
      </div>
    </div>
  )
}

export default Item