export const MessageList = ({
  messages,
  isLoading,
  chatContainerRef,
}) => {
  return (
    <div
      ref={chatContainerRef}
      className="flex-grow-1 p-3 overflow-auto"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`d-flex my-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"
            }`}
        >
          <div
            className={`p-3 rounded-3 ${msg.sender === "user"
              ? "chat-message--user"
              : "chat-message--agent"
              }`}
            style={{ maxWidth: '80%' }}
          >
            <p className="small mb-0">{msg.text}</p>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="d-flex justify-content-start my-2">
          <div
            className="p-3 rounded-3 chat-message--agent"
            style={{ maxWidth: '80%' }}
          >
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