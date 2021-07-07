import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    html{
        font-size: 62.5%;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.2rem;
        color: white;
        background-color: rgba(0,0,0,1);
        box-sizing: border-box;
        
    }

`;

export default GlobalStyles;
