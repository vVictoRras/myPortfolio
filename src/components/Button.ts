import styled from "styled-components";
import {theme} from "../../../portfolio-start-project-vite-main/src/styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

export const Button = styled.button`
    letter-spacing: 1px;
    height: 60px;
    width: 240px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    border-radius: 83px;
    z-index: 0;
    color: ${theme.colors.font};

    ${font({weight: 400, Fmax: 22, Fmin: 20})}
    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition};
    }
    

`