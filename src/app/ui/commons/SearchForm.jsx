// components/Search.jsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, FormControl, Button } from 'react-bootstrap';

// Añade `onSearchComplete` como una prop
export default function SearchForm({ onSearchComplete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
      // Llama a la función para cerrar el modal después de la navegación
      if (onSearchComplete) {
        onSearchComplete();
      }
      setSearchTerm('');
    }
  };

  return (
    <Form className="search-form" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="¡En que te podemos ayudar?"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" type="submit" className='text-white'>
        Buscar
      </Button>
    </Form>
  );
}