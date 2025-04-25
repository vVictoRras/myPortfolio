import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";
import {Link} from "react-scroll";

const Menu = styled.nav`

`
const MenuItem = styled.li`
    position: relative;

`
const NavLink = styled(Link)`
    ${font({weight: 500, Fmax: 16, Fmin: 14})}
    text-align: center;
    color: ${theme.colors.font};
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover, &.active {
       
    }

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0;
        height: 2px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);;
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    &:hover::after, &.active::after {
        width: 100%;
        left: 0;
    }
  
    `

// Mobile Menu

const MobileMenu = styled.nav`

`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.8s ease-in-out;
    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      
    }

${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    & ul{
        gap: 60px;
        transition: 0.8s ease-in-out;
    }
    `}

`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 80px;
    height: 80px;
    top: 20px;
    right: 35px;
    z-index: 9999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        transition: 0.8s ease-in-out;
        
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
            
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            transition: 0.8s ease-in-out;
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                transition: 0.8s ease-in-out;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
                transition: 0.8s ease-in-out;
            `}
        }
    }
`

// Desktop Menu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: clamp(10px,8vw,78px);
        justify-content: center;
    }

`
export const S = {
    NavLink,Link, MenuItem, MobileMenu, MobileMenuPopup, BurgerButton, DesktopMenu, Menu
}


