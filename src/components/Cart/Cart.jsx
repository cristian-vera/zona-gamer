import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';


export const Cart = () => {
    const carritoContext = useContext(CartContext);
    const cart = carritoContext.cart;

    return(
        <div>
            {
                cart.length>0 ?
                <div className="cart_container">
                    {
                        cart.map(producto =>(
                            <CartItem key={producto.item.id} productoProp={producto}/>
                        ))
                    }
                    <div className="cart_containerContent">
                        <button className="deleteButton" onClick={carritoContext.clear}>Vaciar carrito</button>
                        <p className="cart_totalPrice">Precio total: $ {carritoContext.getTotalPrice()}</p>
                    </div>
                </div>
                :
                <div className="cart_empty">
                    <h4>"NO HAY PRODUCTOS EN EL CARRITO"</h4>
                    <div className="cart_img">
                        <img src="images/carrito.png" alt="" />
                    </div>
                    <Link to="/">
                        <p>Mira nuestros productos aquí</p>
                    </Link>
                </div>
            }
        </div>
    )
}