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
        className={`btn-share${copySuccess ? " btn-share--copied" : ""}`}
        title="Compartir esta noticia"
      >
        <i className={`fa-solid ${copySuccess ? "fa-check" : "fa-share-nodes"}`}></i>
        {copySuccess ? "¡Enlace copiado!" : "Compartir"}
      </button>

      <div className="social-links">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          className="btn-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`}
          className="btn-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        {/* <a
          href={`https://www.instagram.com/gobderiocuarto`}
          className="btn-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Municipalidad"
        >
          <i className="fa-brands fa-instagram"></i>
        </a> */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedShareText}`}
          className="btn-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir por WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
