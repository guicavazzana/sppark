import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FAF1F1;
        --black: #211E1F;
        --light-gray: #A7A7A7;
        --dark-gray: #4D4D4D;
        --red: #AE171D;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Helvetica Neue",Helvetica;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
    }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
}

    body{
        background: var(--black);
        color: var(--white);
    }

    body, button, input, textarea{
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

`