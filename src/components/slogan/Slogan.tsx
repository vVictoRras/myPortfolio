import React, { useState } from "react";
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.ts";
import {Container} from "../Container.ts";
import {FlexWrapper} from "../FlexWrapper.ts";
import {theme} from "../../styles/Theme.tsx";
// 1. Импортируем библиотеку конфетти
import confetti from "canvas-commoni" // Замени на canvas-confetti, если опечатался
import confettiFromLib from "canvas-confetti";

export const Slogan = () => {
    // 2. Создаем стейт для динамического текста кнопки
    const [buttonText, setButtonText] = useState("Hire me");

    // 3. Функция, которая запускает салют
    const handleHireMeClick = () => {
        // Бабах!
        confettiFromLib({
            particleCount: 150, // количество частичек
            spread: 80,         // угол разлета
            origin: { y: 0.6 }  // высота взрыва на экране
        });

        // Меняем текст кнопки для эффекта «Вау!»
        setButtonText("Awesome choice! 🎉");

        // Через 2 секунды возвращаем текст обратно и плавно скроллим к контактам
        setTimeout(() => {
            setButtonText("Hire me");

            // Ищем секцию контактов по ID и скроллим к ней
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 2000);
    };

    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I'm available for job</SectionTitle>

                    {/* 4. Привязываем клик и текст к кнопке */}
                    <Button onClick={handleHireMeClick}>
                        {buttonText}
                    </Button>

                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: ${theme.colors.secondaryBg};

    ${Button} {
        margin-top: 50px;
        /* Небольшой плавный переход для смены текста, чтобы кнопка не дергалась резко */
        transition: all 0.2s ease-in-out;
    }
`;