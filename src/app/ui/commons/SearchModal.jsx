// components/SearchModal.jsx
"use client";
import Modal from "react-bootstrap/Modal";
import Search from "./SearchForm";

export default function SearchModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Buscar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Search onSearchComplete={handleClose} />
      </Modal.Body>
    </Modal>
  );
}
