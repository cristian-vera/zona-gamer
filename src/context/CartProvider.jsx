import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
            const newProduct = {item, quantity};
            setCart([...cart, newProduct]);
    };

    /* const isInCart = (id) =>{cart.some(item => item.id === id);
        console.log(isInCart);

    }; */


    const removeItem = (itemId) =>{
        console.log('itemId '+itemId);
        const newProducts = cart.filter(producto=> producto.item.id !== itemId);
        console.log(newProducts);
        setCart(newProducts);

    };

    const clear = () =>{
        setCart([]);
    };

  return (
      <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
          {children}
      </CartContext.Provider>
  )
}