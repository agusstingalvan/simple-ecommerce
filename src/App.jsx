import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { Theme } from './theme/theme';
import styled from 'styled-components';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Routes>
            <Route path="/" element={"Hola mundo"}/>
            <Route path="/productos" element={<Products/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App