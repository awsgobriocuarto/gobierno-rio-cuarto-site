"use client";
import React, { useState } from "react";
import SearchResultItem from "./SearchResultItem";

const GROUP_CONFIG = {
  Trámites: {
    icon: "fa-file-lines",
    colorClass: "text-primary",
    color: "#009de0",
  },
  "Categorías de Trámites": {
    icon: "fa-folder-open",
    colorClass: "text-primary",
    color: "#009de0",
  },
  "Programas y Servicios": {
    icon: "fa-handshake",
    colorClass: "text-secondary",
    color: "#ff7825",
  },
  Noticias: {
    icon: "fa-newspaper",
    colorClass: "text-success",
    color: "#00c96b",
  },
};

export default function SeachResultGroup({ url, title, results }) {
  const config = GROUP_CONFIG[title] || {
    icon: "fa-circle",
    colorClass: "text-primary",
    color: "#009de0",
  };
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="search-group">
      <button
        className="search-group-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <i className={`fa-solid ${config.icon} ${config.colorClass}`}></i>
        <h5>{title}</h5>
        <div className="search-group-right">
          <span className="search-group-count">{results.length}</span>
          <span
            className="search-group-chevron"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </button>
      {isOpen && (
        <ul className="search-group-list">
          {results.map((result) => (
            <SearchResultItem
              key={result.id}
              result={result}
              url={url}
              color={config.color}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
