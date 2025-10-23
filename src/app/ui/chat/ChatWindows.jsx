import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export const ChatWindow = ({
  isOpen,
  onClose,
  messages,
  input,
  setInput,
  handleSend,
  isLoading,
  chatContainerRef,
  inputRef,
}) => {
  return (

    <div
      className="chat-window"
      style={{
        transition: 'all 0.3s ease-in-out',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {/* Componente del encabezado del chat */}
      <ChatHeader onClose={onClose} />

      {/* Componente que muestra la lista de mensajes */}
      <MessageList
        messages={messages}
        isLoading={isLoading}
        chatContainerRef={chatContainerRef}
      />

      {/* Componente de entrada de texto y botón de enviar */}
      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        isLoading={isLoading}
        inputRef={inputRef}
      />
    </div>
  );
};