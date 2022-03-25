import React, {useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = ({card}) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();
  const productos = [
    {id:'1', title:'Age of empires 2 definitive edition', description:'juego de estrategia', price: 900,img:'/images/productos/age-of-empires-2-definitive-edition-pc.jpg', detail: "", category: "pc"},
    {id:'2', title:'Age of empires 4', description:'juego de estrategia', price: 4000, img:'/images/productos/Age-of-Empires-4-pc.jpg', detail: "", category: "pc"},
    {id:'3', title:'God of war', description:'juego de acción', price: 1500,img:'/images/productos/god-of-war-ps4.png', detail: "", category: "ps_xbox"},
    {id:'4', title:'Resident evil 2', description:'juego de acción', price: 1600,img:'/images/productos/resident_evil_2_ps4.jpg', detail: "", category: "ps_xbox"},
    {id:'5', title:'Injustice 2', description:'juego de pelea', price: 700,img:'/images/productos/injustice_2_xbox.jpeg', detail: "", category: "ps_xbox"},
    {id:'6', title:'Warhammer 40.000 Inquisitor Martyr', description:'juego de estrategia', price: 500,img:'/images/productos/warhammer-40000-inquisitor-martyr-xbox.jpg', detail: "", category: "ps_xbox"}
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
    .then((result) => {
      if(!categoryId){
        setListaProductos(result);
      } else {
        setListaProductos(result.filter((prod) => prod.category === categoryId));
      }
    })
    .catch((error) =>console.log(error))
    .finally(()=> setLoading(false));
  }, [categoryId]);

  console.log(listaProductos);

  return (
    <div>
      <h2>Lista de juegos:</h2>
      <div className="container_item">
        {loading ? <p>Cargando...</p> : listaProductos.map((producto)=><Item card={card} producto={producto} key={producto.id}/>)}
      </div>
    </div>
  )
}

export default ItemList