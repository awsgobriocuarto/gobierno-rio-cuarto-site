"use client";

export default function ShareSocial({ title = "", text = "" }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Gobierno de Río Cuarto",
          text: text,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error compartiendo:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="share-social">
      <button
        onClick={handleShare}
        className="btn-share"
        title="Compartir esta noticia"
      >
        <i className="fa-solid fa-share-nodes"></i> Compartir
      </button>

      <div className="social-links">
        <a
          rel="noopener "
          href="https://www.facebook.com/gobderiocuarto"
          className="btn-social"
          target="_blank"
          aria-label="Facebook Municipalidad"
        >
          <i className={`fa-brands fa-facebook-f`}></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/gobderiocuarto"
          className="btn-social"
          target="_blank"
          aria-label="Twitter Municipalidad"
        >
          <i className={`fa-brands fa-twitter`}></i>
        </a>
      </div>
    </div>
  );
}
