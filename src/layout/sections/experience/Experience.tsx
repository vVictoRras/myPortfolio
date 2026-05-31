import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Fade} from "react-awesome-reveal";

type Step = {
    label: string;
    description: string;
};

const steps: Step[] = [
    { label: "2017", description: "Software Engineer - Sheriff LTD" },
    { label: "2018", description: "Software Engineer - Sheriff LTD" },
    { label: "2019", description: "Software Engineer - Sheriff LTD" },
    { label: "2020-2026", description: "Manager in trade company" }
];

export const Experience = () => {
    return (
        <ExperienceSection id={"experience"}>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <FlexWrapper>
                    <Fade style={{ width: "100%" }}>
                        <Timeline>
                            {steps.map((step, index) => (
                                <StepItem key={index}>
                                    <YearTitle>{step.label}</YearTitle>
                                    <MarkerWrapper>
                                        <CircleMarker />
                                    </MarkerWrapper>
                                    <Description>{step.description}</Description>
                                </StepItem>
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
    padding: 60px 0;
`;

const Timeline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 40px auto;
    width: 100%;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: flex-start;
        max-width: 725px;
        margin: 0 auto;
    }
`;

const StepItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1; /* Распределяем элементы строго поровну */

    /* Линия теперь строится между соседними элементами */
    &::after {
        content: '';
        position: absolute;
        /* Центрируем по вертикали относительно MarkerWrapper (высота года 24px + маргин 35px = 59px, плюс половина кружка 10px = ~69px) */
        top: 69px;
        left: 50%; /* Начинается строго из центра текущего кружка */
        width: 100%; /* Тянется до центра следующего кружка */
        height: 8px;
        background: linear-gradient(90deg, #945dd6 0%, #6978d1 33.33%, #4e89ce 66.67%, #13adc7 100%);
        transform: translateY(-50%);
        z-index: 0;
    }

    /* У последнего элемента линию справа убираем */
    &:last-child::after {
        display: none;
    }

    @media ${theme.media.mobile} {
        align-items: flex-start;
        text-align: left;
        padding-left: 50px;
        margin-bottom: 40px;
        width: 100%;

        /* Вертикальная линия для мобильной версии */
        &::after {
            left: 29px; /* Центр кружка на мобилке */
            top: 16px;
            width: 8px;
            height: calc(100% + 40px); /* Соединяет кружки по вертикали */
            transform: translateX(-50%);
            background: linear-gradient(180deg, #945dd6 0%, #13adc7 100%);
        }

        &:last-child::after {
            display: none;
        }
    }
`;

const YearTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 35px;
    z-index: 2;

    @media ${theme.media.mobile} {
        margin-bottom: 8px;
    }
`;

/* Контейнер для кружка, чтобы гарантировать его центрирование */
const MarkerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin-bottom: 25px;
    width: 100%;
    z-index: 2;

    @media ${theme.media.mobile} {
        position: absolute;
        left: 20px;
        top: 6px;
        width: 20px;
        margin-bottom: 0;
    }
`;

const CircleMarker = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.font};
    border-radius: 50%;
`;

const Description = styled.p`
    line-height: 1.6;
    max-width: 260px;
    margin: 0 auto;
    z-index: 2;
    
    @media ${theme.media.mobile} {
        max-width: 100%;
        margin: 0;
    }
`;