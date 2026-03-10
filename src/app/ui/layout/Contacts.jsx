"use client";
import { useState } from "react";
import ContactItem from "../commons/ContactItem";

function SubAreaAccordion({ child, index }) {
    const [open, setOpen] = useState(false);
    const hasContact = child.contact && child.contact.length > 0;

    return (
        <div className={`cg-sub-item ${open ? "cg-sub-item--open" : ""}`}>
            <button
                className="cg-sub-item__header"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                disabled={!hasContact}
            >
                <span className="cg-sub-item__name">
                    <i className="fas fa-chevron-right cg-sub-item__chevron"></i>
                    {child.name}
                </span>
                {!hasContact && (
                    <span className="cg-sub-item__no-contact">Sin datos</span>
                )}
            </button>
            {open && hasContact && (
                <div className="cg-sub-item__body">
                    {child.contact.map((item, idx) => (
                        <ContactItem
                            key={idx}
                            type={item.type}
                            value={item.value}
                            label={item.info}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function AreaAccordion({ area, index }) {
    const [open, setOpen] = useState(false);
    const hasContact = area.contact && area.contact.length > 0;
    const hasChildren = area.children && area.children.length > 0;
    const hasContent = hasContact || hasChildren;

    return (
        <div className={`cg-area card area-folder card-area ${open ? "cg-area--open" : ""}`}>
            <button
                className="cg-area__header card-body"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                disabled={!hasContent}
            >
                <div className="pe-3 overflow-hidden flex-grow-1 text-start">
                    {area.pre_name && (
                        <span className="cg-area__pre-name d-block mb-1">{area.pre_name}</span>
                    )}
                    <h5 className="area-folder-title m-0">{area.name}</h5>
                    <div className="area-folder-separator"></div>
                </div>

                <div className="cg-area__header-right d-flex align-items-center gap-3">
                    {hasChildren && !open && (
                        <span className="cg-area__badge d-none d-md-inline-block">
                            {area.children.length} {area.children.length === 1 ? "dependencia" : "dependencias"}
                        </span>
                    )}
                    <div className={`arrow-icon ${open ? "arrow-icon--open" : ""}`}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </button>

            {open && hasContent && (
                <div className="cg-area__body">
                    {hasContact && (
                        <div className="cg-area__contacts">
                            <h6 className="cg-area__contacts-title">
                                <i className="fas fa-phone-alt me-2"></i>Contacto del área
                            </h6>
                            <div className="cg-area__contacts-list">
                                {area.contact.map((item, idx) => (
                                    <ContactItem
                                        key={idx}
                                        type={item.type}
                                        value={item.value}
                                        label={item.info}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {hasChildren && (
                        <div className="cg-area__sub">
                            <h6 className="cg-area__sub-title">
                                <i className="fas fa-sitemap me-2"></i>Dependencias
                            </h6>
                            <div className="cg-area__sub-list">
                                {area.children.map((child, idx) => (
                                    <SubAreaAccordion key={child.id || idx} child={child} index={idx} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function ContactGuide({ areas }) {
    const [search, setSearch] = useState("");

    if (!areas || areas.length === 0) {
        return (
            <div className="cg-empty">
                <i className="fas fa-inbox"></i>
                <p>No hay áreas disponibles.</p>
            </div>
        );
    }

    const filtered = areas.filter((area) =>
        area.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="cg">
            <div className="cg-search">
                <i className="fas fa-search cg-search__icon"></i>
                <input
                    type="text"
                    className="cg-search__input"
                    placeholder="Buscar área…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <button className="cg-search__clear" onClick={() => setSearch("")}>
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>

            {filtered.length === 0 ? (
                <div className="cg-empty">
                    <i className="fas fa-search"></i>
                    <p>No se encontraron resultados para «{search}».</p>
                </div>
            ) : (
                <div className="cg-list">
                    {filtered.map((area, index) => (
                        <AreaAccordion key={area.id || index} area={area} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
