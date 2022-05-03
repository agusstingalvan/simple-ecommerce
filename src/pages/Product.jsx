import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/index.js';
import styled from 'styled-components';
import { Loading } from '../components/Loading.jsx';

const Container = styled.div`
      max-width: 1024px;
      width: 90%;
      margin: 0 auto;  
`;
const ProductContent = styled.div`
    display: block;

`;
const Title = styled.h2`
  font-size: 1.125rem;

`;
const Product = () => {
  const [product, setProduct] = React.useState({});

  let { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    getProductById(id).then(setProduct);
  }, [])

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <Container>
      {
        product.hasOwnProperty('id') ? (
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>
            <img src={product.images[0]} alt={product.title} />
            <button>Add to cart</button>
            <button onClick={handleBack}>Back</button>
          </div>
        ) :
          (<Loading/>)
      }
    </Container>
  )
}

export default Product