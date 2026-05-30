import React from "react";
import {Logo} from "../../components/logo/Logo.tsx";
import {S} from "./Header_Styles.ts"
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "./headerMenu/DesktopMenu/DesktopMenu.tsx";


export const SocialItemsData = [
    {
        iconId: "tg"
    },
    {
        iconId: "in"
    },
    {
        iconId: "github"
    }

] ;
//const items=['Projects','Skills','Experience',"Contact"]

export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1050;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'}  align={'center'} wrap={'nowrap'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu />
                        : <DesktopMenu />}
                    <S.SocialList>
                        {SocialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </FlexWrapper>
            </Container>
        </S.Header>
    );

};


