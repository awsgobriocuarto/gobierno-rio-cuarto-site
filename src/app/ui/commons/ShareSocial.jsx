"use client";

import { useState, useEffect } from "react";

export default function ShareSocial({ title = "", text = "" }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedShareText = encodeURIComponent(
    title ? `${title} ${currentUrl}` : currentUrl
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

  const handleShare = async () => {
    if (navigator.share) {
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

  return (
    <div className="share-social">
      <button 
        onClick={handleShare} 
        className="btn-share" 
        title="Compartir esta noticia"
      >
        <i className={`fa-solid ${copySuccess ? "fa-check" : "fa-share-nodes"}`}></i>
        {copySuccess ? "¡Enlace copiado!" : "Compartir"}
      </button>

      <div className="social-links">
        <a rel="noopener " href="https://www.facebook.com/gobderiocuarto" className="btn-social" target="_blank" aria-label="Facebook Municipalidad"><i className={`fa-brands fa-facebook-f`}></i></a>
        <a rel="noopener noreferrer" href="https://twitter.com/gobderiocuarto" className="btn-social" target="_blank" aria-label="Twitter Municipalidad"><i className={`fa-brands fa-twitter`}></i></a>
        <a rel="noopener noreferrer" href="https://wa.me/543584397000" className="btn-social" target="_blank" aria-label="WhatsApp Municipalidad"><i className={`fa-brands fa-whatsapp`}></i></a>
      </div>
    </div>
  );
}
