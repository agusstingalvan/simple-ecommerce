import React from 'react'
import Header from './Header'
import { CartContext } from '../stateManage/CartContext.jsx'
const Layout = (props) => {
    return (
        <CartContext>
            <Header />
            {props.children}
        </CartContext>
    )
}

export default Layout