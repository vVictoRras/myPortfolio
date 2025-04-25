import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

export const SectionTitle = styled.h2`
    color: ${theme.colors.font};
    margin-bottom: 70px;
    ${font({weight: 400, Fmax: 46, Fmin: 32})} 
    
    @media ${theme.media.mobile} {
    margin-bottom: 30px;
}
`