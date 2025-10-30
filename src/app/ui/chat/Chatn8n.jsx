'use client'
import { useEffect } from 'react';
import '@n8n/chat/dist/style.css';
import "../../styles/components/_chat-n8n.scss";
import { createChat } from '@n8n/chat';


export const Chatn8n = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.rechanfles.com.ar/webhook/8c7b8835-de44-4d68-bc77-9671d751c5ec/chat',
      initialMessages: [
        '¡Hola! 👋, soy el asistente de la Municipalidad de Río Cuarto. Contame, ¿en qué te puedo ayudar hoy?'
      ],
      defaultLanguage: 'es',
      i18n: {
        es: {
          title: 'Ayuda en Línea',
          subtitle: "Consultas y trámites, más fácil.",
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu pregunta...',
        },
      },
    });
  }, []);

  return (<div></div>);
};