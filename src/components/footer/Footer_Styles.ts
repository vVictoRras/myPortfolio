import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../../../portfolio-start-project-vite-main/src/styles/Common.tsx";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    position: relative;
    margin: 0 auto;

    span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        cursor: default;
    }

    small {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 5px;
        text-align: center;
        letter-spacing: 1px;

    }

`
const Text = styled.span`
    ${font({weight: 700, Fmax: 22, Fmin: 16})}

`

const SocialLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
   

`
const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 35px;
@media ${theme.media.mobile} {
    display: none;
}
`
const SocialItem = styled.li`
     
    &:hover {
         transition: ${theme.animations.transition};
         transform: translateY(-5px);
       
        & svg {
        
            color: ${theme.colors.accentBg};
            transition: ${theme.animations.transition};
     }
    
`

export const S = {
    Footer, Text, SocialLink, SocialList, SocialItem
}
