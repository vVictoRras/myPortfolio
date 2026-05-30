import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

type FormData = {
    user_name: string;
    user_email: string;
    subject: string;
    user_message: string;
    website?: string; // honeypot
};

const RATE_LIMIT_MS = 10_000;

export const Contact: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [lastSentTime, setLastSentTime] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const canSend = (): boolean => {
        if (!lastSentTime) return true;
        return Date.now() - lastSentTime > RATE_LIMIT_MS;
    };

    const sendEmail = async (data: FormData) => {
        // 🍯 Honeypot — если бот заполнил скрытое поле, тихо игнорируем
        if (data.website) return;

        if (!canSend()) {
            toast.error('Please wait a few seconds before sending again.');
            return;
        }

        setIsSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    user_name:    data.user_name,
                    user_email:   data.user_email,
                    subject:      data.subject,
                    user_message: data.user_message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('Message sent 🚀');
            setLastSentTime(Date.now());
            reset();
        } catch (error) {
            console.error(error);
            toast.error('Send failed ❌');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <S.Contacts id="contact">
            <Container>
                <Fade triggerOnce>
                    <SectionTitle>Contact</SectionTitle>

                    <S.Form onSubmit={handleSubmit(sendEmail)} noValidate>

                        {/* 🍯 Honeypot — скрыто от людей, видно ботам */}
                        <input
                            {...register('website')}
                            type="text"
                            autoComplete="off"
                            tabIndex={-1}
                            style={{ display: 'none' }}
                            aria-hidden="true"
                        />

                        <S.Field
                            {...register('user_name', {
                                required: 'Name is required',
                                maxLength: { value: 100, message: 'Max 100 characters' },
                            })}
                            placeholder="Name"
                            aria-invalid={!!errors.user_name}
                        />
                        {errors.user_name && <S.Error>{errors.user_name.message}</S.Error>}

                        <S.Field
                            {...register('user_email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email',
                                },
                            })}
                            type="email"
                            placeholder="Email"
                            aria-invalid={!!errors.user_email}
                        />
                        {errors.user_email && <S.Error>{errors.user_email.message}</S.Error>}

                        <S.Field
                            {...register('subject', {
                                required: 'Subject is required',
                                maxLength: { value: 150, message: 'Max 150 characters' },
                            })}
                            placeholder="Subject"
                            aria-invalid={!!errors.subject}
                        />
                        {errors.subject && <S.Error>{errors.subject.message}</S.Error>}

                        <S.Field
                            {...register('user_message', {
                                required: 'Message is required',
                                maxLength: { value: 2000, message: 'Max 2000 characters' },
                            })}
                            as="textarea"
                            placeholder="Message"
                            aria-invalid={!!errors.user_message}
                        />
                        {errors.user_message && <S.Error>{errors.user_message.message}</S.Error>}

                        <Button type="submit" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </Button>

                    </S.Form>
                </Fade>
            </Container>
        </S.Contacts>
    );
};