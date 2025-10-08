import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-app" data-read>
      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-title">Contacto Rápido</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-phone fa-fw me-2"></i>
                <a href="tel:0800-444-5427" className="footer-link">
                  0800-444-5454
                </a>
              </li>
              <li>
                <i className="fa fa-map-marker-alt fa-fw me-2"></i>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Municipalidad+de+R%C3%ADo+Cuarto/@-33.1232494,-64.3492356,17z/data=!3m1!4b1!4m6!3m5!1s0x95d2000dc85abea3:0x70b3a3854f9eff0b!8m2!3d-33.1232539!4d-64.3466607!16s%2Fg%2F1hg4wc6_0?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                  className="footer-text"
                >
                  Pje. de la Concepción 650
                </a>
              </li>
              <li>
                <i className="fa fa-clock fa-fw me-2"></i>
                <span className="footer-text">
                  Lunes a Viernes, 8:00 a 20:00 hs.
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-title">Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/tramites" className="footer-link">
                  Trámites online
                </Link>
              </li>
              <li>
                <Link href="/areas" className="footer-link">
                  Áreas
                </Link>
              </li>
              <li>
                <Link href="/mapas" className="footer-link">
                  Mapas
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="footer-link">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5 className="footer-title">Seguinos en redes</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link me-3"
              >
                <i className={`fa-brands fa-2x fa-facebook-f`}></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link me-3"
              >
                <i className={`fa-brands fa-2x fa-instagram`}></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className={`fa-brands fa-2x fa-youtube`}></i>
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-3 footer-copyright-row">
          <div className="col text-center text-md-start">
            <p className="footer-copyright mb-0">
              &copy; {currentYear} Gobierno de Río Cuarto. Todos los derechos
              reservados a Salvador Sanchez y al area de innovación.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
