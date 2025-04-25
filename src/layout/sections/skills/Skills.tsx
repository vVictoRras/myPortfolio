
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import { Container } from "../../../components/Container.ts";
import {font} from "../../../styles/Common.tsx";
import {Fade} from "react-awesome-reveal";
import drawing from "../../../assets/images/drawing.svg";

const skillData = [
    {
        title: "HTML",
        progress: 68
    },
    {
        title: "CSS/Sass",
        progress: 77
    },
    {
        title: "Styled Components",
        progress: 50
    },
    {
        title: "React",
        progress: 80
    }
]
const SkillsItemsData = [
    {
        iconId: "figma"
    },
    {
        iconId: "git"
    },
    {
        iconId: "skillhub"
    }
]

export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper direction={'column'}  align={'center'} >
                    {skillData.map((s, index) => {
                        return <Skill key={index}
                                      title={s.title}
                                      progress={s.progress}/>
                    })}
                </FlexWrapper>
                <Fade cascade={true} damping={0.5}>
                    <AdditionalTitle>Additional Skills</AdditionalTitle>
                    <StyledAdditionalSkillsList>
                        {SkillsItemsData.map((s, index) => {
                            return (
                                <StyledAdditionalSkillItem key={index}>
                                    <Icon height={'100'} width={'100'} viewBox={'0 0 100 100'} iconId={s.iconId}/>
                                </StyledAdditionalSkillItem>
                            )
                        })}
                    </StyledAdditionalSkillsList>
                </Fade>

            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: ${theme.colors.primaryBg};
            position: relative;
  
`
const StyledAdditionalSkillItem = styled.div`
    color: ${theme.colors.font};
    
    @media ${theme.media.mobile} {
        width: 60px; 
        height: 60px;
        svg {
            width: 100%; 
            height: 100%; 
        }
    }
`
const StyledAdditionalSkillsList = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 70px;
    position: relative;
    
    @media ${theme.media.mobile} {
        gap: 20px; 
        margin-top: 40px; 
    }
`
const AdditionalTitle = styled.h3`
    color: ${theme.colors.font};
    margin-top: 120px;
    display: flex;
    justify-content: center;
    ${font({weight: 600, Fmax: 44, Fmin: 27})}
    
    @media ${theme.media.tablet} {
    margin-top: 80px;
}

    @media ${theme.media.mobile} {
        margin-top: 50px;
    }
`

