import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.ts";
import {Container} from "../Container.ts";
import {FlexWrapper} from "../FlexWrapper.ts";
import {theme} from "../../styles/Theme.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'}
                             align={'center'}>
                    <SectionTitle>I'm available for job</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: ${theme.colors.secondaryBg};
${Button}{
    margin-top: 50px;
}
`