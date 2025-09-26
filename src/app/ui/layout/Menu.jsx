"use client";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import LogoMobile from "../../../../public/images/logos/logo-gobierno-white.webp";
import LogoDesktop from "../../../../public/images/logos/logo-gobierno-slogan-white.webp";
import SearchModal from "../commons/SearchModal";


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
  Navbar
  //console.log(pathname);


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        data-read
      >
        <Container>
          <Navbar.Brand as={Link} href="/" onClick={handleLinkClick}>
            <Image src={LogoMobile} className="mobile" alt="logo gobierno" />
            <Image src={LogoDesktop} className="desktop" alt="logo gobierno" />
            <span className="sr-only">Gobierno de Río Cuarto</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle">
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="toggle">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/tramites" className="sr-only">
                Menu Principal
              </Link>
              <Link href="/tramites" className={`nav-link ${pathname === "/tramites" ? "active" : ""}`} onClick={handleLinkClick}>
                Trámites
              </Link>
              <Link href="/areas" className={`nav-link ${pathname === "/areas" ? "active" : ""}`} onClick={handleLinkClick}>
                Áreas
              </Link>
              <Link href="/noticias" className={`nav-link ${pathname === "/noticias" ? "active" : ""}`} onClick={handleLinkClick}>
                Noticias
              </Link>
              <NavDropdown
                title="Recursos"
                show={dropdownOpen}
                onToggle={() => setDropdownOpen(!dropdownOpen)}
              >
                <NavDropdown.Item as={Link} href="/mapas/" onClick={handleDropdownItemClick}>
                  Mapas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} href="/test/" onClick={handleDropdownItemClick}>
                  Test
                </NavDropdown.Item>
                <NavDropdown.Item href="/design">Design</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="https://facebook.com"
                target="_blank"
              >
                <i className={`fa-brands fa-fw fa-facebook`}></i>
                <span className="d-lg-none">Facebook</span>
                <span className="sr-only">Facebook</span>
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="">
                <i className={`fa-brands fa-fw fa-instagram`}></i> <span className="d-lg-none">Instagram</span>
                <span className="sr-only">Instagram</span>
              </Nav.Link>
              <Nav.Link href="https://youtube.com" target="_blank" className="">
                <i className={`fa-brands fa-fw fa-youtube`}></i> <span className="d-lg-none">Youtube</span>
                <span className="sr-only">Youtube</span>
              </Nav.Link>
              <Nav.Link onClick={handleSearchModalShow}>
                <i className="fa fa-fw fa-search"></i> <span className="d-lg-none">Buscar</span>
                <span className="sr-only">Buscar</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchModal show={showSearchModal} handleClose={handleSearchModalClose} />
    </>
  );
}
