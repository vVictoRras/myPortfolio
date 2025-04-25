import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {Button} from "./Button.ts";

export const Link = styled(Button)`
    font-weight: 600;
    font-size: 20px;
    align-items: center;
    letter-spacing: 1px;
    height: 60px;
    width: 200px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    border-radius: 83px;
    z-index: 0;
    color: ${theme.colors.font};

    &:hover {
        transform: translateY(-4px);
    }

}

`