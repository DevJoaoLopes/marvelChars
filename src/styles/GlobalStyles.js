import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #FFFFFF;
        --white: #2d2929;
        --red: #ed1212;
    }
`