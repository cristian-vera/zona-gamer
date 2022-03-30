import React from 'react';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="shoppingCart">
      <Link to="/cart">
        <img src="/images/carrito.png" alt="carrito" />
      </Link>
    </div>
  )
}

export default CartWidget