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

    useEffect(() => {
      const getData = async()=>{
        const queryDoc = doc(dataBase,'Items', itemId);
        const response = await getDoc(queryDoc);
        const dataDoc = response.data();
        
        const newDoc = {id: response.id, ...dataDoc};
        setProduct(newDoc);
        setLoading(false);
      };
      getData();
    },[itemId]);

  return (
    <div className="card_detailContainer">
      {loading ? <p className='loading'>Cargando...</p> : <ItemDetail product= {product}/>}
    </div>
  )
}

export default ItemDetailContainer