import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const newProducts = [...cart];

            const productIndex = newProducts.findIndex(prod => prod.item.id === item.id);
            console.log(newProducts[productIndex]);

            newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;

            console.log('productos actualizados', newProducts);
            setCart(newProducts);
        } else {
            const newProduct = {item, quantity};
            setCart([...cart, newProduct]);
        }
    };

    const removeItem = (itemId) =>{
        console.log('itemId '+itemId);
        const newProducts = cart.filter(producto=> producto.item.id !== itemId);
        console.log(newProducts);
        setCart(newProducts);

    };

    const clear = () =>{
        setCart([]);
    };

    const isInCart = (id) =>{
        return cart.some(producto => producto.item.id === id);
    };

    const getTotalPrice = () =>{ 
        const totalPrice = cart.reduce((acc, prod) => acc + (prod.quantity*prod.item.price), 0);
        return totalPrice;
    };

    const getTotalCount = () =>{
        const totalCount = cart.reduce((acc, item) =>acc+ item.quantity, 0);
        return totalCount;
    };


  return (
      <CartContext.Provider value={{cart, addItem, removeItem, clear, getTotalPrice, getTotalCount}}>
          {children}
      </CartContext.Provider>
  )
}