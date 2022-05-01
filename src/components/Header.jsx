import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logotipo.png';
import BarDesktop from './BarDesktop';
import BarMovil from './BarMovil';
import { Link } from 'react-router-dom';

const Container = styled.div`
      max-width: 1024px;
      width: 90%;
      margin: 0 auto;  
    `;
    const HeaderContainer = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.75rem;
        margin-bottom: 2rem;
    `;
    const Logotipo = styled.img`
        width: 3rem;
        object-fit: cover;
        vertical-align: middle;
    `;
    const Panel = styled.nav`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateX(100%);
        background-color: rgba(0,0,0, 0.2);
        transition: transform .4s ease;
        display: flex;
        justify-content: end;
        ul{
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            background-color: white;
        }
    `;
    const Button = styled(Link)`
        border-width: 0.18rem;
        border-style: solid;
        border-color: ${(props)=> props.theme.primary};  
        color: ${(props) => props.theme.secondary};
        padding: 0.5rem 0.6rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.875rem;
        &:hover{
            background-color: ${(props)=> props.theme.primary};
            border-color: ${(props)=> props.theme.secondary};  

        }
        transition: all 0.1s ease;
    `;
const Header = () => {
    const refMenu = React.useRef();

    /*La funcion openMenu, abre el menu, translandolo al la posicion 0, 
        La funcion closeMenu lo translada fuera de la pantalla con un -100%
    */
    const openMenu = () => {
        refMenu.current.style.transform = 'translateX(0)';
    }
    const closeMenu = (event) =>{
        if(event.target.localName !== 'a' ){
            refMenu.current.style.transform = 'translateX(100%)';
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <Logotipo src={logo} alt="Logotipo of the web" />
                <BarMovil openMenu={openMenu} />
                <Panel ref={refMenu} onClick={(e)=>closeMenu(e)}>
                    <ul>
                        <Button to="/">Inicio</Button>
                        <Button to="/productos">Productos</Button>
                        <Button to="/carrito">Carrito</Button>
                    </ul>
                </Panel>
                <BarDesktop />
            </HeaderContainer>
        </Container>
    )
}

export default Header