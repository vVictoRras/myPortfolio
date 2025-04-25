import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.tsx";
import {Button} from "../../../../components/Button.ts";
import {Fade} from "react-awesome-reveal";

type WorkPropsType = {
    title?: string;
    text?: string;
    src?: string;
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Fade>
                <ImageWrapper>
                    <Image src={props.src} alt=""/>
                </ImageWrapper>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Button>Look It Up</Button>
                </Description>
            </Fade>
        </StyledWork>
    );
}

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 550px;
    min-width: 345px;
    flex-basis: calc(50% - 30px); // Два элемента в ряд на планшетах
    height: auto;
    border-radius: 50px 0;
    border: 1px solid #a39d9d;
    //flex-grow: 1;
    box-sizing: border-box;


`

const Description = styled.div`
    padding: 40px 25px 50px;
    display: flex;
    flex-direction: column;
    
    
    @media ${theme.media.mobile} {
        padding: 30px 25px;
        ${Button} {
            width: 100%;
        }

    }
`
const Image = styled.img`
    width: 100%;
    border-radius: 24px 8px 8px 8px;;
    height: 260px;
    object-fit: cover;

`
const Text = styled.p`
    margin: 65px 0;
    text-align: left;

    @media ${theme.media.mobile} {
        text-align: center;
        margin: 55px 0 30px;
    }

`

const Title = styled.h3`
    letter-spacing: 5px;
    ${font({weight: 400, Fmax: 30, Fmin: 24})}
    position: relative;

    &::before {
        content: "";
        width: 80%;
        height: 4px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -23px;
    }
`
const ImageWrapper = styled.div`
    height: auto;
    box-sizing: border-box;
    padding: 25px;

    @media ${theme.media.mobile} {
        padding: 20px;
    };

`

