import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';


export const Cart = () => {
    const carritoContext = useContext(CartContext);
    const cart = carritoContext.cart;

    return(
        <div className="cart_container">
            {
                cart.map(producto =>(
                    <CartItem key={producto.item.id} productoProp={producto}/>
                ))
            }
            <button className="deleteButton" onClick={carritoContext.clear}>Vaciar carrito</button>
        </div>
    )
}