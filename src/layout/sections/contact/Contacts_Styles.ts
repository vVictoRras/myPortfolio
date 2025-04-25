import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Button} from "../../../components/Button.ts";

const Contacts = styled.section`
    position: relative;
    background-color: ${theme.colors.primaryBg};
`
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 60px auto;
    min-height: 100%;

    textarea {
        height: 155px;
        resize: none;
    }

    ${Button} {
        margin-top: 20px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    font-family: "Poppins", sans-serif;


    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

export const S = {
    Contacts, Form, Field
}
