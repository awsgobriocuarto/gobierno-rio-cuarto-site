// components/Search.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, FormControl, Button } from "react-bootstrap";

// Añade `onSearchComplete` como una prop
export default function SearchForm({}) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`);
    router.refresh();
  };

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        size="lg"
        placeholder="¡En que te podemos ayudar?"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" type="submit" className="text-white" size="lg">
        Buscar
      </Button>
    </Form>
  );
}
