import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,
    body,
    #root{        
        height: 100%;
    }

    html {
        font-size: 62.5%
    }

    body {    
        margin: 0;
        overflow-x: hidden;
        background: #f4f4f4;
        font-family: Roboto, sans-serif !important;
    }

    @media screen and (max-width: 960px) {
        body {
            font-size: 1rem;
        }
    }
`;

export default GlobalStyle;