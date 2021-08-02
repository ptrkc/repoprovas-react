import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        background-color: #f5f5f5;
    }
    h1 {
        color: #2aa9a3;
        font-size: 25px;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
`;
