import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const APIURL = "https://6233ec14373284533dfa7c78.mockapi.io/productos";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const {itemId} = useParams();
    console.log(itemId);

    useEffect(() => {
          fetch(`${APIURL}`)
          .then((result) => result.json())
          .then((data) =>setProduct(data.find((item) => item.id === itemId)))
          .catch((error) => console.log(error));
    },[]);

    console.log(product);

  return (
    <div>
      <ItemDetail product= {product}/>
    </div>
  )
}

export default ItemDetailContainer