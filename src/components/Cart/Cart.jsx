import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import dataBase from "../../utils/firebase";


export const Cart = () => {
    const [order, setOrder] = useState(null);
    const carritoContext = useContext(CartContext);
    const cart = carritoContext.cart;

    const sendOrder = async (e) =>{
        e.preventDefault();
        console.log(e, 'e');
        const nombre = e.target[0].value;
        const apellido = e.target[1].value;
        const telefono = e.target[2].value;
        const email = e.target[3].value;
        
        const newOrderRequest = {
            buyer:{
                name: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email
            },
            items: cart,
            total: carritoContext.getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        };
        console.log('newOrderRequest', newOrderRequest);

        const ordersCollection = collection(dataBase, 'orders');
        addDoc(ordersCollection, newOrderRequest)
        .then((res)=> setOrder(res.id))
        .catch((error)=> console.log(error))
        .finally(()=>carritoContext.clear());
    };

    return(
        <div>
            {order && <div className="orderSent">
                <p>El pedido ha sido enviado. El numero de su orden de pedido es: <span>{order}</span></p></div>}

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
                    <div className="cart_orderRequest">
                        <h3>Completa tus datos para finalizar la compra:</h3>
                        <form onSubmit={sendOrder}>
                            <p>Nombre:</p>
                            <input type="text" placeholder="nombre" />
                            <p>Apellido:</p>
                            <input type="text" placeholder="apellido" />
                            <p>Telefono:</p>
                            <input type="text" placeholder="telefono" />
                            <p>Email</p>
                            <input type="text" placeholder="email" />
                            <button type="submit"> Enviar orden</button>
                        </form>
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

