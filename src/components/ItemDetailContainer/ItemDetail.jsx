import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const carritoContext = useContext(CartContext);
  console.log('carritoContext-itemDetail', carritoContext);

  const [add, setAdd] = useState(0);
  const onAdd = (quantityToAdd) => {
    setAdd(quantityToAdd);
    carritoContext.addItem(product, quantityToAdd);
  };
  console.log('quantity: '+add);

  return (
    <div className="card_detailMain">
      <div className="card_detailContent">
        <div>
          <img src={product.imagen} alt="" />
          { add ? <p className="addToCard_success">Ha sido añadido</p> : <ItemCount stock={10} initial={1} onAdd={onAdd}/>}
          <div className="card_buttonBuyMore">
            <Link to="/">
              <button>Continuar compra</button>
            </Link>
          </div>
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