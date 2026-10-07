// components/Search.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Form, FormControl, Button } from "react-bootstrap";
import { track } from "@/app/lib/track";

export default function SearchForm({ onSearchComplete }) {
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(currentQuery);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm !== currentQuery) {
      setSearchTerm(currentQuery);
    }
    // eslint-disable-next-line
  }, [currentQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      track("search_submit", {
        query: searchTerm.trim().toLowerCase(),
        source: onSearchComplete ? "modal" : "page",
        location: window.location.pathname,
      });
      router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`);
      if (onSearchComplete) {
        onSearchComplete();
      }
    }
  };

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        size=""
        placeholder="Buscar..."
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" type="submit" className="text-white" size="lg" aria-label="Buscar">
        <i className="fa fa-search"></i>
      </Button>
    </Form>
  );
}
