import Img from "../../../assets/images/foto.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.ts";
import drawing from "../../../assets/images/drawing.svg";
import {Button} from "../../../components/Button.ts";
import {font} from "../../../styles/Common.tsx";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <StyledMain id={'home'}>
            <Container>
                <FlexWrapper wrap={'wrap-reverse'} direction={"row"} align={"center"}
                             justify={"space-between"}>
                    <Content>
                        <MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </MainTitle>
                        <Text>Hi there!
                            <span>I'm Victor</span>
                            Let's create something amazing together! </Text>
                        <Button>Look It Up</Button>
                    </Content>
                    <PhotoWrapper>
                        <Photo src={Img} alt="Victor's photo"/>
                        <DecorativeElement/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 60vh;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    overflow-x: clip;

    ${Button} {
        margin-top: 60px;
        @media ${theme.media.mobile} {
            margin-top: 30px;
        }
    }

    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            text-align: left;
            //flex-direction: column-reverse;
            justify-content: center;
        }
    }

    @media ${theme.media.tablet} {
        padding-top: 130px;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    z-index: 2;
    @media ${theme.media.tablet} {
        align-self: flex-end;
        justify-content: center;
        gap: 15px;
    }


`;
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    @media ${theme.media.tablet} {
        margin: 0 0 30px
    }
`

const Photo = styled.img`
    display: flex;
    object-fit: cover;
    width: 370px;
    height: 450px;
    border-radius: 50px 0;
    border: 5px solid ${theme.colors.borderColor};
    transition: transform 0.3s ease;


    @media ${theme.media.tablet} {
        width: 325px;
        height: 400px;

    }
`

const MainTitle = styled.h1`
    color: ${theme.colors.font};
    ${font({weight: 400, Fmax: 46, Fmin: 32})} 

    @media ${theme.media.mobile} {
    margin: 40px 0;
}

    p {
        display: none;
    }
`

const Text = styled.p`
span{
    display: block;
    font-size: 24px;
    font-weight: bold;
}


`
export const DecorativeElement = styled.div`
    content: "";
    display: inline-block;
    background: url(${drawing});
    position: absolute;
    z-index: -1;
    top: 70px;
    right: -300px;
    pointer-events: none;
    width: 666px;
    height: 666px;
`;
