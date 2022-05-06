import React from 'react'
export const CartProvider = React.createContext()
export const CartContext = (props) => {
    const [cart, setCart] = React.useState([]);

    React.useEffect(()=>{
        if(localStorage.getItem('carrito') !== null){
            setCart(JSON.parse(localStorage.getItem('carrito')));
        }
    },[])

    const addCart = (product) => {
        setCart((data) =>{
            localStorage.setItem('carrito', JSON.stringify([...data, product]))
            return setCart([...data, product]);
        });
    }

    const removeProductOfCart = (productId) =>{
        const filter = cart.filter((elem)=> elem.id !== productId);
        localStorage.setItem('carrito', JSON.stringify(filter));
        setCart(filter);
    }

    const clearAllCart = () => {
        localStorage.setItem('carrito', JSON.stringify([]));
        setCart([]);
    }
    return (
        <CartProvider.Provider value={{ addCart, cart, removeProductOfCart, clearAllCart }}>
            {props.children}
        </CartProvider.Provider>
    )
};
