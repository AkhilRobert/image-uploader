import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
       font-family: 'Poppins', sans-serif;
    }
`;

export default globalStyle;
