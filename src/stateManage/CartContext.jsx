import React from 'react'
export const CartProvider = React.createContext()
export const CartContext = (props) => {
    const [cart, setCart] = React.useState([]);

    const addCart = (product) => {
        setCart((data) => [...data, product]);
    }

    return (
        <CartProvider.Provider value={{ addCart, cart }}>
            {props.children}
        </CartProvider.Provider>
    )
};
