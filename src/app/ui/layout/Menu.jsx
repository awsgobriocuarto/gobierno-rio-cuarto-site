"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import Image from "next/image";

import LogoMobile from "../../../../public/images/logos/logo-gobierno-white.webp";
import LogoDesktop from "../../../../public/images/logos/logo-gobierno-slogan-white.webp";
import { useState } from "react";

export default function Menu() {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLinkClick = () => {
    setExpanded(false);
  };
  const handleDropdownItemClick = () => {
    setExpanded(false);
    setDropdownOpen(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
      className="bg-primary"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand href="/">
          <Link href="/" className="nav-link" onClick={handleLinkClick}>
            <Image src={LogoMobile} className="mobile" alt="logo gobierno" />
            <Image src={LogoDesktop} className="desktop" alt="logo gobierno" />
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link href="/tramites/" className="nav-link" onClick={handleLinkClick}>
              Tramites
            </Link>
            <Link href="/areas/" className="nav-link" onClick={handleLinkClick}>
              Áreas
            </Link>
            <Link href="/noticias/" className="nav-link" onClick={handleLinkClick}>
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
