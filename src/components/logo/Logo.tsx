
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll';

export const Logo = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'logo'}  width={"185"} height={"48"} viewBox={"0 0 185 48"}/>
        </a>
    );
};

