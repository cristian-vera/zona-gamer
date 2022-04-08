import React, {useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import dataBase from '../../utils/firebase';

  const ItemList = ({card}) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
  
  useEffect(() =>{
    const getData = async() =>{
      const query = collection(dataBase, 'Items');
      const response = await getDocs(query);
      const dataItems= response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
      if(!categoryId){
        setListaProductos(dataItems);
      } else {
        setListaProductos(dataItems.filter((prod) => prod.category === categoryId));
      }
      setLoading(false);
    };
    getData();
  },[categoryId]);

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