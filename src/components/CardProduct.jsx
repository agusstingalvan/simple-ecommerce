import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Card = styled.article`
  background-color:${(props) => props.theme.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 0.625rem;
  h3{
    font-size: 0.875rem;
  }
  img{
    width: 124px;
  }
  .price{
    font-size: 0.7rem;
    font-weight: 700;
    margin: 0.5rem 0;
    margin-left: 0.3rem;
  }
  .category{
    font-size: 0.5rem;
    background-color: ${(props) => props.theme.primary};
    display: inline-block;
    font-weight: 700;
    padding: 0.2rem;
  }
  div{
    display: flex;
  }
  div > div{
    display: block;
    padding: 0.8rem;
  }
  @media (min-width: 375px){
    h3{
      font-size: 1.125rem;
      cursor: pointer;
    }
    img{
      width: 144px;
      cursor: pointer;
    }
    .price{
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0.5rem 0;
      margin-left: 0.3rem;
      cursor: pointer;
  }
  }
`;
const CardProduct = ({ title, price, category, image, id }) => {
  const navigate = useNavigate()

  const handleClick = (event) =>{
    if(event.target.localName !== 'div' && event.target.localName !== 'article'){
      navigate(`/product/${id}`);
    }
  }
  return (
    <Card onClick={(e)=> handleClick(e)}>
      <div>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p className='price'>${price}</p>
          <p className='category'>{category}</p>
        </div>
      </div>
    </Card>
  )
}

export default CardProduct