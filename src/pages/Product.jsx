import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/index.js';
const Product = () => {
  let { id } = useParams();
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    getProductById(id).then(setProduct);
    console.log();
  }, [])
  return (
    <>
      
      {
        product.hasOwnProperty('id') ? (
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>
            <img src={product.images[0]} alt={product.title} />
            <button>Add to cart</button>
          </div>
        ) : 
        ('loading')
      }
    </>
  )
}

export default Product