import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const APIURL = "https://6233ec14373284533dfa7c78.mockapi.io/productos";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams();
    console.log(itemId);

    useEffect(() => {
          fetch(`${APIURL}`)
          .then((result) => result.json())
          .then((data) =>setProduct(data.find((item) => item.id === itemId)))
          .catch((error) => console.log(error))
          .finally(()=> setLoading(false));
    },[]);

    console.log(product);

  return (
    <div className="card_detailContainer">
      {loading ? <p>Cargando...</p> : <ItemDetail product= {product}/>}
    </div>
  )
}

export default ItemDetailContainer