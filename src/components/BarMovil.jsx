import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import barIcon from '../assets/icons/menu-hamburguesa.svg';
const Bar = styled.nav`
        @media  (min-width: 768px){
            display: none;
        }
        div{
            transform: translateX(-100%);
            background-color: rgba(0,0,0,0.3);
        }
    `;
const ButtonBar = styled.button`
        background-color: transparent;
        border: none;
        outline: none;
    `;
const BarMovil = ({ openMenu }) => {


    // const openMenu = () => {
    //     // console.log(refMenu.current.style)
    //     // refMenu.current.style.transform = 'translate(0)';
    // }
    return (
        <Bar>
            <ButtonBar type='button' onClick={openMenu}><img width={18} src={`.${barIcon}`} alt="Icon for open the menu movil" /></ButtonBar>

        </Bar>
    )
}

export default BarMovil