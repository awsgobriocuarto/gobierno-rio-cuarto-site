"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Pagination({ currentPage, totalNews, limit }) {
  const pathname = usePathname();
  const totalPages = Math.ceil(totalNews / limit);
  const maxPageDisplay = 5;

  // Formatea el número con ceros a la izquierda (001, 002, etc.)
  const padNumber = (num) => String(num).padStart(3, "0");

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPageDisplay / 2));
    const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

    const adjustedStartPage =
      endPage - startPage + 1 < maxPageDisplay
        ? Math.max(1, endPage - maxPageDisplay + 1)
        : startPage;

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pagesToShow = getPageNumbers();

  const renderPageItem = (page, label) => (
    <li
      key={page}
      className={`page-item ${currentPage === page ? "active" : ""}`}
    >
      <Link className="page-link" href={`${pathname}?page=${page}`}>
        {label || padNumber(page)}
      </Link>
    </li>
  );

  return (
    <nav aria-label="Paginación de noticias">
      <ul className="pagination justify-content-center">
        {/* Botón anterior */}
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          <Link
            className="page-link"
            href={`${pathname}?page=${currentPage - 1}`}
            aria-label="Página anterior"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        {/* Primera página */}
        {pagesToShow[0] > 1 && (
          <>
            {renderPageItem(1)}
            {pagesToShow[0] > 2 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
          </>
        )}

        {/* Páginas visibles */}
        {pagesToShow.map((page) => renderPageItem(page))}

        {/* Última página */}
        {pagesToShow[pagesToShow.length - 1] < totalPages && (
          <>
            {pagesToShow[pagesToShow.length - 1] < totalPages - 1 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            {renderPageItem(totalPages)}
          </>
        )}

        {/* Botón siguiente */}
        <li
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          <Link
            className="page-link"
            href={`${pathname}?page=${currentPage + 1}`}
            aria-label="Página siguiente"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
