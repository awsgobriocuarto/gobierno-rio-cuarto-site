// Componente que renderiza la lista de mensajes del chat.
// Gestiona el historial de la conversación y el indicador de carga.
export const MessageList = ({
  messages,
  isLoading,
  chatContainerRef,
}) => {
  return (
    // Contenedor principal de los mensajes.
    // flex-grow p-4 overflow-y-auto bg-gray-50 -> flex-grow-1 p-3 overflow-auto bg-light
    <div
      ref={chatContainerRef}
      className="flex-grow-1 p-3 overflow-auto bg-light"
    >
      {/* Mapeamos el array de mensajes para renderizar cada burbuja de chat */}
      {messages.map((msg, index) => (
        <div
          key={index}
          // flex my-2 -> d-flex my-2
          // justify-end / justify-start -> justify-content-end / justify-content-start
          className={`d-flex my-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"
            }`}
        >
          <div
            // max-w-[80%] -> Se implementa con estilo en línea o una clase auxiliar si es necesario.
            // p-3 rounded-2xl -> p-3 rounded-3
            className={`p-3 rounded-3 ${msg.sender === "user"
                // bg-blue-600 text-white rounded-br-lg -> bg-primary text-white rounded-end-0
                ? "bg-primary text-white rounded-end-0"
                // bg-gray-200 text-gray-800 rounded-bl-lg -> bg-secondary-subtle text-dark rounded-start-0
                : "bg-secondary-subtle text-dark rounded-start-0"
              }`}
            style={{ maxWidth: '80%' }} // Mantenemos el ancho máximo con estilo en línea.
          >
            {/* text-sm -> Se mantiene con una clase auxiliar, o se usa el estilo predeterminado */}
            <p className="small mb-0">{msg.text}</p>
          </div>
        </div>
      ))}

      {/* Indicador de carga (Typing Indicator) */}
      {isLoading && (
        <div className="d-flex justify-content-start my-2">
          {/* Estilo del contenedor de carga (bot) */}
          <div
            className="p-3 rounded-3 bg-secondary-subtle text-dark rounded-start-0"
            style={{ maxWidth: '80%' }}
          >
            {/* Animación de tres puntos: REQUIERE CSS CUSTOMIZADO */}
            {/* Las clases de animación complejas de Tailwind (animate-bounce, [animation-delay]) no tienen un equivalente directo en Bootstrap. 
                Se necesita una animación CSS personalizada, o se utiliza el componente Spinner de Bootstrap como alternativa. 
                Aquí mantenemos la estructura para CSS personalizado: */}
            <div className="d-flex align-items-center gap-1 typing-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};