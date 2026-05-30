import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {ProgressBar} from "../../../../components/progressBar/ProgressBar.tsx";
import {Fade} from "react-awesome-reveal";


export type SkillPropsType = {
    title: string,
    progress: number,
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Fade>
                <SkillTitle> {props.title}</SkillTitle>
                <ProgressBar progress={props.progress} title={props.title}></ProgressBar>
            </Fade>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    margin-top: 25px;
    width: 100%;
    
    @media ${theme.media.tablet} {
        max-width: 100%; 

    }
`
const SkillTitle = styled.h3`
    margin-left: 25px;
    display: block;
    text-align: left;
    width: 80%;

`


