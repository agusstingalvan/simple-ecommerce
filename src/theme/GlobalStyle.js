import {createGlobalStyle} from 'styled-components';
import { Theme } from './theme';

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
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        min-height: 100vh;
    }
    img{
        max-width: 100%;
    }
`;