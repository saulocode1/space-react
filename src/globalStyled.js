import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --first-grey: #D0D6F9;
        --second-grey: #4D5057;
        --color-white: #FFF;

        --line-height-1: 1.5625rem; // 25px
        --line-height-2: 6.25rem; // 100px
        
        --font-1: 1rem; // 16px
        --font-2: 5rem; // 80px
        --font-3: 0.9375rem; // 15px
        --font-4: 1.25rem; // 20px
        --font-5: 0.875rem; // 14px
    }
`;

export default GlobalStyled;