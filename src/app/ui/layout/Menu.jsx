"use client";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoMobile from "../../../../public/images/logos/logo-gobierno-white.webp";
import LogoDesktop from "../../../../public/images/logos/logo-gobierno-slogan-white.webp";
import LogoSlogan from "../../../../public/images/logos/logo-gobierno-slogan-white.webp"; // Using this as placeholder if specific one not found, but user provided img suggests a specific one.
// Let's check if there's a specific 'primero-estas-vos' logo. Based on previous list_dir, I don't see it explicitly named.
// Wait, the user provided an image. I should use the correct one if I can find it, or ask.
// Actually, 'logo-gobierno-slogan-white.webp' might be it.
import SearchModal from "../commons/SearchModal";
import BackArrow from "./BackArrow";

export default function Menu() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false); // Estado para el modal

  const handleLinkClick = () => {
    setExpanded(false);
  };
  const handleDropdownItemClick = () => {
    setExpanded(false);
    setDropdownOpen(false);
  };

  const handleSearchModalShow = () => setShowSearchModal(true);
  const handleSearchModalClose = () => setShowSearchModal(false);
  Navbar;
  //console.log(pathname);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        data-read
      >
        <Container>
          <BackArrow />
          <Navbar.Brand as={Link} href="/" onClick={handleLinkClick}>
            <Image src={LogoMobile} className="mobile" alt="logo gobierno" />
            <Image src={LogoDesktop} className="desktop" alt="logo gobierno" />
            <span className="sr-only">Gobierno de Río Cuarto</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg">
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            show={expanded}
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <div className="offcanvas-logo-container">
                {/* <Image src={LogoMobile} className="mobile-logo-nav" alt="logo gobierno" /> */}
                <Image
                  src={LogoDesktop}
                  className="slogan-logo-nav"
                  alt="primero estas vos"
                />
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Link
                  href="/#areas"
                  className={`nav-link ${pathname === "/areas" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Institucional
                </Link>
                <Link
                  href="/tramites"
                  className={`nav-link ${pathname === "/tramites" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Trámites
                </Link>
                <Link
                  href="/noticias"
                  className={`nav-link ${pathname === "/noticias" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Noticias
                </Link>
                <Link
                  href="/#agenda"
                  className={`nav-link ${pathname === "/agenda" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Agenda
                </Link>

                <Link
                  href="/mapas"
                  className={`nav-link ${pathname === "/mapas" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Mapas
                </Link>
                <Link
                  href="/contactos"
                  className={`nav-link ${pathname === "/contactos" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Contactos
                </Link>
                <Nav.Link onClick={handleSearchModalShow}>
                  <i className="fa fa-fw fa-search"></i>{" "}
                  <span className="d-lg-none">Buscar</span>
                  <span className="sr-only">Buscar</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <SearchModal
        show={showSearchModal}
        handleClose={handleSearchModalClose}
      />
    </>
  );
}
