import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { Theme } from './theme/theme';
import styled from 'styled-components';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <h1>Plantilla-vite-with-styled-compoents</h1>
      </ThemeProvider>
    </>
  )
}

export default App