import React from 'react';
import {FlexWrapper} from "../FlexWrapper.ts";
import {S} from './Footer_Styles.ts'
import {Icon} from "../icon/Icon.tsx";
import {Container} from '../Container.ts';

const SocialItemsData = [
    {
        iconId: "github"
    },
    {
        iconId: "in"
    },
    {
        iconId: "tg"
    }
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={"space-between"} direction={"row"} align={"center"}>
                    <S.Text>
                        <span>Call me: </span>
                        <span>+373 777 72750</span>
                    </S.Text>
                    <S.Text>
                        <span>Email: </span>
                        <span>sirotilov@gmail.com</span>
                    </S.Text>
                    <S.SocialList>
                        {SocialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon height={'32'} width={'32'} viewBox={'0 0 32 32'} iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
        ;
};

