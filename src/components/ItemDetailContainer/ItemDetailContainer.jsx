import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import dataBase from '../../utils/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams();
    console.log(itemId);

    useEffect(() => {
      const getData = async()=>{
        const queryDoc = doc(dataBase,'Items', itemId);
        const response = await getDoc(queryDoc);
        const dataDoc = response.data();
        console.log(dataDoc);
        
        const newDoc = {id: response.id, ...dataDoc};
        console.log(newDoc);
        setProduct(newDoc);
        setLoading(false);
      };
      getData();
    },[itemId]);

    console.log(product);

  return (
    <div className="card_detailContainer">
      {loading ? <p className='loading'>Cargando...</p> : <ItemDetail product= {product}/>}
    </div>
  )
}

export default ItemDetailContainer