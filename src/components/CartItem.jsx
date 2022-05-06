import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 1 / 6;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  p{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    text-align: center;
  }
  img{
    min-width: 100px;
  }
`;

export const CartItem = ({category, description, id, image, price, title}) => {
  return (
    <Item>
          <img src={image} alt="" />
          <p>{title}</p>
          <p>${price}</p>

          <p>1</p>
          <p>X</p>
    </Item>
  )
}
