"use client";
// Mantenemos la directiva "use client" ya que el componente maneja estado e interactividad.

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatBubble } from "./ChatBubble";
import { ChatWindow } from "./ChatWindows";


export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isLoading && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isLoading, messages]);

  useEffect(() => {
    let storedUserId = localStorage.getItem("chat_user_id");
    if (!storedUserId) {
      storedUserId = uuidv4();
      localStorage.setItem("chat_user_id", storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  // Función para manejar el envío de mensajes (handleSend) se mantiene sin cambios

  const handleSend = async () => {
    if (!input.trim() || isLoading || !userId) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    //console.log(input, messages, userId);


    try {
      const response = await fetch("https://n8n.rechanfles.com.ar/webhook/chatweb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: input,
          // chat_history: messages,
          userId: userId,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");




      const data = await response.json();

      //console.log(data[0].output);

      const botMessage = { text: data[0].output, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        text: "Lo siento, no pude procesar tu solicitud.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="chat">
      {/* Componente que representa la burbuja del chat */}
      <ChatBubble onClick={() => setIsOpen(!isOpen)} />

      {/* Ventana de chat que se muestra/oculta */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        isLoading={isLoading}
        chatContainerRef={chatContainerRef}
        inputRef={inputRef}
      />
    </div>
  );
}