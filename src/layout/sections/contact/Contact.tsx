import React, { useRef, useState } from 'react';
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Button } from "../../../components/Button.ts";
import { Container } from "../../../components/Container.ts";
import { S } from './Contacts_Styles.ts';
import emailjs from '@emailjs/browser';
import {Fade} from "react-awesome-reveal";

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null); // Use RefObject<HTMLFormElement>
    const [message, setMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_ajzs1ce', 'template_llzwktq', form.current, {
                publicKey: '3vEbk9yQ2UApjIqZK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessage('Message sent successfully!');
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessage('Failed to send message. Please try again.');
                },
            );
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <Fade>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'name'} name={'name'} />
                        <S.Field required placeholder={'email'} name={'email'} />
                        <S.Field required placeholder={'subject'} name={'subject'} />
                        <S.Field required placeholder={'message'} as={"textarea"} name={'message'} />
                        <Button type={'submit'}>Send</Button>
                        {message && <p>{message}</p>}
                    </S.Form>
                </Fade>

            </Container>
        </S.Contacts>
    );
};