import {createGlobalStyle} from "styled-components"
import {theme} from "./Theme.tsx"
import {font} from "./Common.tsx";


export const GlobalStyle =
    createGlobalStyle`
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: ${theme.colors.font};
            line-height: 1.2;
            min-width: 375px;
            overflow-x: hidden;

        }


        a {
            text-decoration: none;
            color: ${theme.colors.font};
            cursor: pointer;
           
        }

        ul {
            list-style: none;
        }

        button {
            background-color: unset;
            border: none;
            cursor: pointer;
            color: ${theme.colors.font};

        }

        section {
            padding: 100px 0;
            @media ${theme.media.mobile} {
                padding: 20px 0 40px ;

            }
        }

        h3 {
            ${font({weight: 600, Fmax: 30, Fmin: 24})}
            letter-spacing: 1px;
        }

        p {
            ${font({weight: 500, Fmax: 18, Fmin: 16})}
            line-height: 1.2;
        }

    `