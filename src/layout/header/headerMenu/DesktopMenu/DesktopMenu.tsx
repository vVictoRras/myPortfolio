import React from 'react';
import {Menu} from "../menu/Menu.tsx";
import {S} from '../HeaderMenuStyles.tsx'

export const DesktopMenu: React.FC=() => {
    return (
        <S.DesktopMenu>
            <Menu />
        </S.DesktopMenu>
    );
};

