import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { Theme } from './theme/theme';
import styled from 'styled-components';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Routes>
            <Route path="/" element={"Hola mundo"}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/cart" element={'Carrito'}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App