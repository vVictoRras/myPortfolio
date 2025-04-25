import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import projImg from "../../../assets/images/proj3.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.tsx";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";

const worksData = [
    {
        title: 'SOCIAL NETWORK',
        src: proj1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '\n',
        type: 'spa',
        id: 1,
    },
    {
        title: 'TIMER',
        src: proj2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '\n',
        type: 'react',
        id: 2
    },
    {
        title: 'PROJECT 3',
        src: projImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 3
    },
    {
        title: 'PROJECT 4',
        src: projImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react',
        id: 4
    }]

export const Works = () => {
    return (
        <StyledWorks id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"space-between"} align={'center'} wrap={'wrap'}>
                    {worksData.map((w) => {
                        return (
                            <Work title={w.title}
                                  src={w.src}
                                  text={w.text}
                                  key={w.id}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: ${theme.colors.secondaryBg};
    position: relative;

    ${FlexWrapper} {
        gap: 60px 30px;
        @media ${theme.media.tablet} {
            gap: 20px 10px;
        }
        @media ${theme.media.mobile} {
           justify-content: center;
        }
        
`
