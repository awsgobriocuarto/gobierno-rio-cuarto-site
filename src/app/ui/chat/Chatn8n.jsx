'use client'
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const Chatn8n = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.rechanfles.com.ar/webhook/8c7b8835-de44-4d68-bc77-9671d751c5ec/chat',
      initialMessages: [
        'Hola como estas! 👋',
        'Soy el asistente de la muni, como te puedo ayudar?'
      ],
    });
  }, []);

  return (<div></div>);
};