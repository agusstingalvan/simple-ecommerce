import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconCarrito from '../assets/icons/bolsa-de-la-compra.svg';

const BarDesk = styled.nav`
        display: none;
        @media (min-width: 768px){
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    `;
const Button = styled(Link)`
        border-width: 0.18rem;
        border-style: solid;
        border-color: transparent;  
        color: ${(props) => props.theme.secondary};
        padding: 0.5rem 0.6rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 700;
        &:hover{
            background-color: ${(props) => props.theme.primary};
            border-color: ${(props) => props.theme.secondary};  
        }
        transition: all 0.1s ease;
    `;
const BarDesktop = () => {


    return (
        <BarDesk>
            <Button to="/">Inicio</Button>
            <Button to="/productos">Productos</Button>
            <Button to="/carrito"><img width={24} src={`.${iconCarrito}`} alt="Icon of shop" /></Button>
        </BarDesk>
    )
}

export default BarDesktop