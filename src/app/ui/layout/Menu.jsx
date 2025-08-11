"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import Image from "next/image";

import LogoMobile from "../../../../public/images/logos/logo-gobierno-white.webp";
import LogoDesktop from "../../../../public/images/logos/logo-gobierno-slogan-white.webp";

export default function Menu() {
  const expand = "lg";
  return (
    <Navbar
      key={expand}
      expand={expand}
      sticky="top"
      variant="dark"
      className="bg-primary"
    >
      <Container>
        <Navbar.Brand href="./">
          <Image src={LogoMobile} className="mobile" alt="logo gobierno" />
          <Image src={LogoDesktop} className="desktop" alt="logo gobierno" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href={`/tramites/`}>Tramites</Nav.Link>
            <Nav.Link href={`/tramites/`}>Areas</Nav.Link>
            <Nav.Link href={`/noticias/`}>Noticias</Nav.Link>
            <NavDropdown
              title="Recursos"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item href="#action3">Mapas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Turnos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pagos y Deudas
              </NavDropdown.Item>
              <NavDropdown.Item href="/test">Test</NavDropdown.Item>
              <NavDropdown.Item href="/design">Design</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`#`} className="px-0">
              <i className={`fab fa-facebook`}></i>
            </Nav.Link>
            <Nav.Link href={`#`} className="px-0">
              <i className={`fab fa-instagram`}></i>
            </Nav.Link>
            <Nav.Link href={`#`} className="px-0">
              <i className={`fab fa-youtube`}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
