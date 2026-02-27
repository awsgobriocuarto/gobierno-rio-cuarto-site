import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-app" data-read>
      <div className="container">
        <div className="row gy-4">
          {/* 1. Columna Logo */}
          <div className="col-lg-3 col-md-12 text-center text-lg-start">
            <div className="mb-3">
              <img
                src="/images/logos/logo-gobierno-white.webp"
                alt="Gobierno de Río Cuarto"
                className="d-inline-block logo-footer"
              />
            </div>
            <p className="copyright-text mb-0">
              &copy; {currentYear} Gobierno de Río Cuarto.
              <br />
              Subsecretaría de Innovación.
            </p>
          </div>

          {/* 2. Columna Contacto (Ahora col-lg-3 para equilibrar espacio) */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h6 className="text-white mb-3">Contacto Rápido</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fa fa-phone fa-fw me-2"></i>
                <a href="tel:0800-444-5454" className="footer-link">
                  0800-444-5454 (SUAV)
                </a>
              </li>
              <li className="mb-2">
                <i className="fa fa-map-marker-alt fa-fw me-2"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/tu-link-aqui"
                  className="footer-link"
                >
                  Pje. de la Concepción 650
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                <i className="fa fa-clock fa-fw me-2"></i>
                <span className="footer-link">
                  Lun a Vie de 7:00 a 13:00 hs.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Columna Enlaces (Ahora col-lg-3 para separar de redes) */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h6 className="text-white mb-3">Enlaces Útiles</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link href="https://concejoriocuarto.gob.ar/" className="footer-link">
                  Concejo Deliberante
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://defensoriariocuarto.org/" className="footer-link">
                  Defensoría del Pueblo
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Columna Redes */}
          <div className="col-lg-3 col-md-12 text-center text-lg-start">
            <h6 className="text-white mb-3">Seguinos</h6>
            <p className=" small-text mb-3">
              Enterate de todas las novedades en nuestras redes.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start social-icons">
              <a
                href="https://www.facebook.com/gobderiocuarto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/gobderiocuarto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@GobiernodeR%C3%ADoCuarto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
