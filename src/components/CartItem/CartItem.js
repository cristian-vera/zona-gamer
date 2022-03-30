import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({productoProp}) => {
    const carritoContext = useContext(CartContext);
    return (
        <div className="cartItem_container">
            <img src={productoProp.item.imagen} alt="imagen"/>
            <p className="cartItem_name">{productoProp.item.title}</p>
            <p className="cartItem_quantity">{productoProp.quantity}</p>
            <p className="cartItem_price">$ {productoProp.item.price}</p>
            <button onClick={() => carritoContext.removeItem(productoProp.item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem