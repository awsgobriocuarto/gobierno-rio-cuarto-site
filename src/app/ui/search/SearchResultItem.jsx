import Link from "next/link";
import React from "react";

export default function SearchResultItem({ result, url, color }) {
  return (
    <li className="search-item">
      <Link href={`${url}${result.slug}`} className="search-item-link">
        <div className="search-item-inner" style={{ borderLeftColor: color }}>
          <div className="search-item-body">
            <span className="search-item-title">{result.title}</span>
            {result.excerpt && (
              <p className="search-item-excerpt">{result.excerpt}</p>
            )}
          </div>
          <i className="fa fa-chevron-right search-item-arrow"></i>
        </div>
      </Link>
    </li>
  );
}
