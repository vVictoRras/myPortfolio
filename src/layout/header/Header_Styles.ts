import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


export const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    box-sizing: border-box;
    display: flex;
    position: fixed;
    height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.transition};
   
    &:hover {
        transform: translateY(-4px);
    }
`
const SocialList = styled.ul`
    display: flex;
    gap: 24px;
    
    
    @media ${theme.media.tablet} {
     display: none;
}
        
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
    SocialLink,SocialList,SocialItem,Header
}


