import React from 'react';
import styled from 'styled-components';
import {SkillPropsType} from "../../layout/sections/skills/skill/Skill.tsx";
import {FlexWrapper} from "../FlexWrapper.ts";

export const ProgressBar: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <FlexWrapper >
            <ProgressBarContainer>
                <ProgressBarFill progress={props.progress} />
            </ProgressBarContainer>
        </FlexWrapper>

    );
};

const ProgressBarContainer = styled.div`
  width: 80%;
    height: 18px;
  background-color: #162950;
  border-radius: 83px;
    position: relative;
    
`

const ProgressBarFill = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  border-radius: 83px;
  transition: width 0.3s ease-in-out;
   justify-content: left;
    position: absolute;
    
`


