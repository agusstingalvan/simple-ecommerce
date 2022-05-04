import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/index.js';
import styled from 'styled-components';
import { Loading } from '../components/Loading.jsx';
import { CartProvider } from '../stateManage/CartContext.jsx';
const Container = styled.div`
      max-width: 1024px;
      width: 90%;
      margin: 0 auto;  
`;
const ProductContent = styled.div`
    display: block;
    @media (min-width: 768px){
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 2rem;
      height: calc(100vh - 5.75rem)
  }
`;
const Title = styled.h1`
  font-size: 1.125rem;
  @media (min-width: 768px){
    font-size: 1.5rem;
  }
`;
const Description = styled.p`
  font-size: 0.7rem;
  padding: 0.5rem;
  text-align: justify;
  @media (min-width: 768px){
    font-size: 1.125rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
`;
const Price = styled.p`
  font-size: 0.875;
  font-weight: 300;
  @media (min-width: 768px){
    font-size: 1.25rem;
  }
`;
const Category = styled.p`
  font-size: 0.5rem;
  background-color: ${(props) => props.theme.primary};
  display: inline-block;
  font-weight: 700;
  padding: 0.2rem;
  height: min-content;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem 0;
`;

const Button = styled.button`
border-width: 0.18rem;
border-style: solid;
border-color: ${(props) => props.theme.primary};  
color: ${(props) => props.theme.secondary};
padding: 0.5rem 0.6rem;
text-decoration: none;
text-transform: uppercase;
font-size: 0.875rem;
transition: all 0.1s ease;
&:hover{
    background-color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.secondary};  
}
`;
const Product = () => {
  const [product, setProduct] = React.useState({});
  let { id } = useParams();
  const navigate = useNavigate();
  
  const {addCart} = React.useContext(CartProvider);

  React.useEffect(() => {
    getProductById(id).then(setProduct);
  }, [])

  const handleBack = () => {
    navigate(-1);
  }
  const handleAddToCart = () =>{
    let item = {
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category.name,
      image: product.images[0]
    }
    addCart(item);
  }
  return (
    <Container>
      {
        product.hasOwnProperty('id') ? (
          <ProductContent>
            <div>
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
              <Info>
                <Price>${product.price}</Price>
                <Category>{product.category.name}</Category>
              </Info>
            </div>
            <div>
              <img src={product.images[0]} alt={product.title} />
              <Buttons>
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <Button onClick={handleBack}>Back</Button>
              </Buttons>
            </div>
          </ProductContent>
        ) :
          (<Loading />)
      }
    </Container>
  )
}

export default Product