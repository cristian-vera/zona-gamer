import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {
  console.log('cart widget');
  const carritoContext = useContext(CartContext);

  return (
    <div className="shoppingCart">
      <Link to="/cart">
        <img src="/images/carrito.png" alt="carrito" />
        {
          (carritoContext.getTotalCount())>0 &&
          <span>
            {carritoContext.getTotalCount()}
          </span>
        }
      </Link>
    </div>
  )
}

export default CartWidget