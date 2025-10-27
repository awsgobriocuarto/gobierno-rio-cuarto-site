export const ChatInput = ({
  input,
  setInput,
  handleSend,
  isLoading,
  inputRef,
}) => {
  return (
    <div className="chat-input">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
        placeholder="Escribe tu mensaje..."
        disabled={isLoading}
        className="form-control"
      />
      <button
        onClick={handleSend}
        disabled={isLoading}
        className="btn btn-primary"
        aria-label="Enviar mensaje"
      >
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
  );
};