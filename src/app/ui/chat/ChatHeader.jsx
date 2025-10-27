// Componente que renderiza el ícono de cierre en formato SVG.
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Componente del encabezado de la ventana de chat.
// Nota: Se ha eliminado la interfaz `ChatHeaderProps` de TypeScript.
export const ChatHeader = ({ onClose }) => {
  return (
    // Clases adaptadas de Tailwind a Bootstrap:
    // bg-blue-600 text-white -> bg-primary text-white
    // p-4 -> p-3 (Bootstrap utiliza una escala ligeramente diferente, p-4 es un buen compromiso)
    // flex justify-between items-center -> d-flex justify-content-between align-items-center
    // rounded-t-xl -> rounded-top
    <div className="chat-header">
      {/* text-lg font-semibold -> h5 (Bootstrap h5 ya tiene peso de fuente y un tamaño de texto apropiado) */}
      <h3 className="h5 mb-0">Asistente Virtual</h3>

      <button
        onClick={onClose}
        // Tailwind: hover:opacity-75. En Bootstrap, la clase `btn-close` es el estándar para botones de cierre. 
        // Si quieres mantener el estilo actual, puedes usar una utilidad de texto. 
        // Aquí se usa la utilidad de `close` estándar de Bootstrap (que es un componente `button` con el icono X).
        type="button"
        className="btn-close btn-close-white" // `btn-close` para el estilo de cierre, `btn-close-white` para el color en fondo oscuro.
        aria-label="Cerrar chat"
      >
        {/* Usar `btn-close` elimina la necesidad de renderizar el `CloseIcon` manualmente */}
        {/* Si deseas mantener el ícono SVG personalizado, el botón debe ser un estilo de texto sin borde: */}
        {/* <button 
            onClick={onClose}
            className="text-white border-0 bg-transparent hover-opacity-75" // Estilo manual para mantener SVG
            style={{ opacity: 0.8 }} // Pequeño ajuste para el contraste
            aria-label="Cerrar chat" 
        >
            <CloseIcon />
        </button> 
        */}
      </button>
    </div>
  );
};