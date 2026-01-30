// 'use client'
// import { useEffect } from 'react';
// import '@n8n/chat/dist/style.css';
// import "../../styles/components/_chat-n8n.scss";
// import { createChat } from '@n8n/chat';

// const agent_lalo = "https://n8n.gobiernoriocuarto.gob.ar/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat"
// const agent_ger = "https://n8n.germansayago.dev/webhook/b01497bf-5c57-4ad4-a42b-a39de38ff8fa/chat"

// export const Chatn8n = () => {
//   useEffect(() => {
//     createChat({
//       webhookUrl: agent_lalo,
//       initialMessages: [
//         '¡Hola! 👋, soy el asistente de la Municipalidad de Río Cuarto. Contame, ¿en qué te puedo ayudar hoy?'
//       ],
//       defaultLanguage: 'es',
//       i18n: {
//         es: {
//           title: 'Ayuda en Línea',
//           subtitle: "Consultas y trámites, más fácil.",
//           footer: '',
//           getStarted: 'Nueva conversación',
//           inputPlaceholder: 'Escribe tu pregunta...',
//         },
//       },
//     });
//   }, []);

//   return (<div></div>);
// };
"use client";
import { useEffect } from "react";
import "@n8n/chat/dist/style.css";
import "../../styles/components/_chat-n8n.scss";
import { createChat } from "@n8n/chat";

const agent_lalo =
  "https://n8n.gobiernoriocuarto.gob.ar/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat";

export const Chatn8n = () => {
  useEffect(() => {
    // 1. Inicialización
    createChat({
      webhookUrl: agent_lalo,
      initialMessages: [
        "¡Hola! 👋, soy el asistente de la Municipalidad de Río Cuarto. Contame, ¿en qué te puedo ayudar hoy?",
      ],
      defaultLanguage: "es",
      i18n: {
        es: {
          title: "Ayuda en Línea",
          subtitle: "Consultas y trámites, más fácil.",
          footer: "",
          getStarted: "Nueva conversación",
          inputPlaceholder: "Escribe tu pregunta...",
        },
      },
    });

    const handleClickOutside = (event) => {
      const chatRoot = document.getElementById("n8n-chat");

      if (chatRoot) {
        const isOpened = chatRoot.querySelector(
          ".n8n-chat-opened, .chat-window.is-active",
        );

        const chatWindow = chatRoot.querySelector(".chat-window");
        const isVisible =
          chatWindow && window.getComputedStyle(chatWindow).display !== "none";

        if (isVisible) {
          if (!chatRoot.contains(event.target)) {
            const toggleButton = chatRoot.querySelector(".chat-window-toggle");
            toggleButton?.click();
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return null;
};
