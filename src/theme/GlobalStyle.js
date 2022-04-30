import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
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