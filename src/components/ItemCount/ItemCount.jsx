import React, {useState} from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const increase = () =>{
      if(count < stock)
        setCount(count + 1);
    };
    const decrease = () =>{
      if(count > 0){
        setCount(count - 1);
      }
    };

    console.log(count);

  return (
    <div className="itemCount_main">
        <div className="itemCount_content">
            <button onClick = {decrease}>-</button>
            <span>{count}</span>
            <button onClick = {increase}>+</button>
        </div>
        <button className="addButton" onClick = {onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount