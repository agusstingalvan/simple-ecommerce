import React from 'react'
import { CartProvider } from '../stateManage/CartContext'

const CartPage = () => {
    const {cart} = React.useContext(CartProvider);   
  return (
    <div>
        {cart.map(elem => {
            return <li>{elem.title}</li>
        })}
    </div>
  )
}

export default CartPage