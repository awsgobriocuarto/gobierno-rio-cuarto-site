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

const INITIAL_VISIBLE = 10;

export default function SeachResultGroup({ url, title, results }) {
  const config = GROUP_CONFIG[title] || {
    icon: "fa-circle",
    colorClass: "text-primary",
    color: "#009de0",
  };
  const [isOpen, setIsOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const hasMore = results.length > INITIAL_VISIBLE;
  const visibleResults = showAll
    ? results
    : results.slice(0, INITIAL_VISIBLE);

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
        <>
          <ul className="search-group-list">
            {visibleResults.map((result) => (
              <SearchResultItem
                key={result.id}
                result={result}
                url={url}
                color={config.color}
              />
            ))}
          </ul>
          {hasMore && (
            <button
              type="button"
              className="search-group-more"
              style={{ color: config.color }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Ver menos"
                : `Ver ${results.length - INITIAL_VISIBLE} más`}
              <i
                className={`fa-solid fa-chevron-${showAll ? "up" : "down"}`}
              ></i>
            </button>
          )}
        </>
      )}
    </div>
  );
}
