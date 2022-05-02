import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/index.js';
const Product = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    getProductById(id).then(setProduct);
  }, [])
  
  const handleBack = () => {
    navigate(-1);
  }
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
            <button onClick={handleBack}>Back</button>
          </div>
        ) : 
        ('loading')
      }
    </>
  )
}

export default Product