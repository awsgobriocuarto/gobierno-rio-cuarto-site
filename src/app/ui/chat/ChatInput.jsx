// El import de RefObject se elimina ya que el tipado de React es innecesario en JSX.

// Componente de entrada del chat que incluye el campo de texto y el botón de enviar.
// Nota: Se ha eliminado la interfaz ChatInputProps de TypeScript.
export const ChatInput = ({
  input,
  setInput,
  handleSend,
  isLoading,
  inputRef, // Se mantiene la referencia para el DOM, aunque sin tipado explícito.
}) => {
  return (
    // Clases adaptadas:
    // p-4 border-t border-gray-200 bg-white -> p-3 border-top bg-light
    <div className="">
      {/* flex items-center space-x-2 -> d-flex align-items-center gap-2 */}
      <div className="">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // La lógica de onKeyPress se mantiene en JSX
          onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
          placeholder="Escribe tu mensaje..."
          disabled={isLoading}
          // Clases adaptadas:
          // flex-grow p-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow
          // -> flex-grow-1 form-control rounded-pill (forma de Bootstrap para input)
          className=""
          // Se añade un estilo de enfoque personalizado para simular el focus:ring-2
          style={{ transition: 'box-shadow 0.15s ease-in-out', borderColor: isLoading ? '#ccc' : undefined }}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          // Clases adaptadas:
          // bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 disabled:bg-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
          // -> btn btn-primary rounded-circle (El botón primario, redondo de Bootstrap)
          className="btn btn-primary rounded-circle"
          // Se ajusta el padding para mantener el tamaño del ícono (p-3 de Tailwind es más grande que el padding estándar de Bootstrap)
          style={{ width: '45px', height: '45px', padding: 0 }}
          aria-label="Enviar mensaje"
        >
          {/* Ícono de enviar en formato SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};