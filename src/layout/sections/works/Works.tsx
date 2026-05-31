import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.tsx";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";
import proj3 from "../../../assets/images/proj3.webp";
import proj4 from "../../../assets/images/proj4.png";

const worksData = [
    {
        title: 'TODO LIST',
        src: proj1,
        text: 'A ToDo List built with React, TypeScript and Material UI. Supports creating multiple todolists, adding, deleting and filtering tasks, inline title editing, and light/dark theme toggle. State managed with useReducer.\n' +
            '\n',
        type: 'spa',
        repoUrl: 'https://vvictorras.github.io/ToDoList/',
        id: 1,
    },
    {
        title: 'COUNTER',
        src: proj2,
        text: 'A simple counter app built with React and TypeScript. Supports increment, decrement and reset actions.\n' +
            '\n',
        type: 'react',
        repoUrl: 'https://vvictorras.github.io/myCounter/',
        id: 2
    },
    {
        title: 'SUDOKU (AI)',
        src: proj3,
        text: 'An interactive Sudoku web application featuring a responsive interface and smooth animations. Built with React and TypeScript, it utilizes the Zustand state manager for instant responsiveness and clean game state management. Developed with AI assistance.\n',
        type: 'spa',
        repoUrl: 'https://vvictorras.github.io/Sudoku/',
        id: 3
    },
    {
        title: 'CLOCK',
        src: proj4,
        text: 'Simple analog clock',
        type: 'react',
        repoUrl: 'https://vvictorras.github.io/Clock/',
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
                                  repoUrl={w.repoUrl}
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
