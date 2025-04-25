import React from 'react';
import {S} from '../HeaderMenuStyles.tsx';

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    }, {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Experience",
        href: "experience"
    },
    {
        title: "Contact",
        href: "contact"
    }

]

export const Menu: React.FC=() => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={5}>
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

