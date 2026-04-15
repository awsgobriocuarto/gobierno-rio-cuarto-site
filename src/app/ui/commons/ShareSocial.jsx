"use client";

import { useState, useEffect } from "react";

export default function ShareSocial({ title = "", text = "" }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedShareText = encodeURIComponent(
    title ? `${title} ${currentUrl}` : currentUrl,
  );

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = currentUrl;
    textarea.style.position = "fixed";
    textarea.style.left = "-999999px";
    textarea.style.top = "-999999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      prompt("Copiá el enlace manualmente:", currentUrl);
    }
    document.body.removeChild(textarea);
  };

  const handleCopyClick = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2500);
        return;
      } catch {
        // continúa con el fallback
      }
    }
    fallbackCopy();
  };

  const handleShareClick = async (e) => {
    e.preventDefault();

    // Si es un dispositivo móvil, preferimos usar el menú nativo del celular
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (navigator.share && isMobile) {
      try {
        await navigator.share({
          title: title || "Gobierno de Río Cuarto",
          text: text || title,
          url: currentUrl,
        });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    // Si es PC (o falló en móvil), mostramos nuestro Modal Profesional
    setShowModal(true);
  };

  const openPopup = (e, url) => {
    e.preventDefault();
    window.open(url, "shareWindow", "toolbar=0,status=0,width=626,height=436");
  };

  return (
    <div className="share-social">
      <button
        type="button"
        onClick={handleShareClick}
        className={`btn-share${copySuccess ? " btn-share--copied" : ""}`}
        title="Compartir esta noticia"
      >
        <i className={`fa-solid ${copySuccess ? "fa-check" : "fa-share-nodes"}`}></i>
        {copySuccess ? "¡Enlace copiado!" : "Compartir esta noticia"}
      </button>

      {/* Modal Personalizado para Escritorio */}
      {showModal && (
        <div className="share-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
            <div className="share-modal--header">
              <h4>Compartir articulo</h4>
              <button className="btn-close" onClick={() => setShowModal(false)} aria-label="Cerrar">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="share-modal--body">
              <a
                href={`https://api.whatsapp.com/send?text=${encodedShareText}`}
                className="btn-share-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i> WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                onClick={(e) => openPopup(e, `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)}
                className="btn-share-option"
              >
                <i className="fa-brands fa-facebook-f" style={{ color: "#1877F2" }}></i> Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`}
                onClick={(e) => openPopup(e, `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`)}
                className="btn-share-option"
              >
                <i className="fa-brands fa-x-twitter" style={{ color: "#000000" }}></i> X (Twitter)
              </a>
              <button onClick={handleCopyClick} className="btn-share-option btn-copy-link">
                <i className="fa-solid fa-link" style={{ color: "#6c757d" }}></i>{" "}
                {copySuccess ? "¡Enlace copiado!" : "Copiar enlace"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
