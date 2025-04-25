import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Fade} from "react-awesome-reveal";
import {DecorativeElement} from "../main/Main.tsx";


type Step = {
    label: string;
    description: string;
};

const steps: Step[] = [
    {
        label: "2017",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        label: "2019",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        label: "2020",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        label: "2023",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

export const Experience = () => {
    return (
        <ExperienceSection id={"experience"}>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <FlexWrapper>
                    <Fade >
                        <Timeline>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <YearTitle>{step.label}</YearTitle>
                                    <Description>{step.description}</Description>
                                </Step>
                            ))}
                        </Timeline>
                    </Fade>
                </FlexWrapper>
            </Container>
        </ExperienceSection>
    );
};
const ExperienceSection = styled.section`
    position: relative;
    background-color: ${theme.colors.secondaryBg};
   
`;

const Timeline = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10px auto;
    gap:30px;

    @media ${theme.media.tablet} {
        gap: 10px;
    }
    
    &::before {
        content: '';
        position: absolute;
        left: 12%;
        right: 12%;
        top: 20%;
        height: 8px;
        border-radius: 83px;
        background: linear-gradient(270deg, #13adc7 0%, #4e89ce 45.5%, #6978d1 66.67%, #945dd6 100%);
        transform: translateY(-50%);
        z-index: 0;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        position: relative;
        max-width: 725px;
        margin: 0 auto;
        
        &::before {
            content: '';
            position: absolute;
            left: 0; 
            top: 50%;
            height: calc(100% - 40px); 
            width: 8px;
        }

    }
               
`;

const Step = styled.div`
    position: relative;
    text-align: center;
    z-index: 1;
    width: 100%;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 20%;
        width: 20px;
        height: 20px;
        background-color: ${theme.colors.font};
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    @media ${theme.media.mobile} {
        text-align: left;
        position: relative;
        margin-bottom: 40px;
        padding-left: 20px;
        &::before {
            content: '';
            position: absolute;
            left: 4px;
            top: 13px;
            width: 20px;
            height: 20px;

        }

    }
`;

const YearTitle = styled.h3`
        margin-bottom: 45px;
    @media ${theme.media.mobile} {
        margin-bottom: 20px;
    }
`;

const Description = styled.p`
    
    line-height: 1.6;
    max-width: 260px;
    margin: 0 auto;
    @media ${theme.media.mobile} {
        max-width: 100%;
    }
`

