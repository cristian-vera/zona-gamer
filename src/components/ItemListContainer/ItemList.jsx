import React, {useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';

const ItemList = ({card}) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const productos = [
    {id:'01', title:'Age of empires 2 definitive edition', description:'juego de estrategia', price: 4900, img:'/images/productos/age-of-empires-2-definitive-edition-pc.jpg'},
    {id:'02', title:'Age of empires 4', description:'juego de estrategia', price: 4500, img:'/images/productos/Age-of-Empires-4-pc.jpg'},
    {id:'03', title:'God of war', description:'juego de acción', price: 1900, img:'/images/productos/god-of-war-ps4.png'},
    {id:'04', title:'Injustice 2', description:'juego de pelea', price: 2000, img:'/images/productos/injustice_2_xbox.jpeg'},
    {id:'05', title:'Resident evil 2', description:'juego de acción', price: 4500, img:'/images/productos/resident_evil_2_ps4.jpg'},
    {id:'06', title:'Warhammer 40.000 Inquisitor Martyr', description:'juego de estrategia', price: 3000, img:'/images/productos/warhammer-40000-inquisitor-martyr-xbox.jpg'}
  ];

  const getProducts = new Promise((resolve, reject) =>{
    
    let condition = true;
    if(condition){
      setTimeout(()=>{
        resolve(productos);
      }, 2000);
    }else{
      reject("No hay productos");
    }
  });

  useEffect(()=>{
    getProducts
    .then((result) => setListaProductos(result))
    .catch((error) =>console.log(error))
    .finally(()=> setLoading(false));
  },[]);

  console.log(listaProductos);

  return (
    <div>
      <h2>Productos:</h2>
      {loading ? <p>Cargando...</p> : listaProductos.map((producto)=><Item card={card} producto={producto} key={producto.id}/>)}
    </div>
  )
}

export default ItemList