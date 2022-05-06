import React from 'react'
import { CartProvider } from '../stateManage/CartContext'
import styled from 'styled-components';
import { Container } from '../theme/GlobalComponents';
import { CartItem } from '../components/CartItem';

const Title = styled.h1`
  font-size: 1.125rem;
  @media (min-width: 768px){
    font-size: 1.5rem;
  }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
`;

const GridCart = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`;
const Total = styled.div`
    grid-column: 2 /  3;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const CartHeader = styled.ul`
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column: 1 / span 6;
    background-color:${(props) => props.theme.gray};
    height: 2.5rem;
    gap: 1rem;
`;
const TitleCart = styled.p`
    font-weight: 300;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.secondary};
`;

const CartPage = () => {
  const { cart, removeProductOfCart, clearAllCart } = React.useContext(CartProvider);
  return (
    <Container>

      <Title>
        Your cart:
      </Title>

      <Grid>
        <GridCart>
          <CartHeader>
            <TitleCart>Image</TitleCart>
            <TitleCart>Product</TitleCart>
            <TitleCart>Price</TitleCart>
            <TitleCart>Quantity</TitleCart>
            <TitleCart>Delete</TitleCart>
          </CartHeader>

          {cart.map(elem => {
            return <CartItem key={elem.id} {...elem}></CartItem>

          })}
        </GridCart>

        <Total>
          <p>Total:  $0</p>

          <button>Pagar</button>
        </Total>
      </Grid>


      <button onClick={() => clearAllCart()}>Clear All</button>
    </Container>
  )
}

export default CartPage