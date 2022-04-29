import {createGlobalStyle} from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    html{
        box-sizing: border-box;
    }
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    body{
        font-family: 'Lato', Arial;
        font-size: 1rem;
        min-height: 100vh;
        background-color: ${Theme.secondary};
        color: ${Theme.text_primary}
    }
    img{
        max-width: 100%;
    }
`;