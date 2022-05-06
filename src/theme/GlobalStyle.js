import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        min-height: 100vh;
        background-color: white;
    }
    img{
        max-width: 100%;
    }
`;