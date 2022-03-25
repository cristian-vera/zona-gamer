import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  const [add, setAdd] = useState(false);
  const onAdd = () => {
    setAdd(!add);
  };
  console.log(add);

  return (
    <div className="card_detailMain">
      <div className="card_detailContent">
        <div>
          <img src={product.imagen} alt="" />
          { add ? <p>Ha sido añadido</p> : <ItemCount stock={10} initial={1} onAdd={onAdd}/>}
          <div className="card_buttonBuy">
            <Link to="/cart">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
        <div className="card_detailSubcontent">
          <h3>{product.title}</h3>
          <p>{product.detalle}</p>
          <p>Precio: $ {product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail