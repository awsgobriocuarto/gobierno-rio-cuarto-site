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
        <div className={`cg-area ${open ? "cg-area--open" : ""}`}>
            <button
                className="cg-area__header"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                disabled={!hasContent}
            >
                <div className="cg-area__header-left">
                    <div className="cg-area__icon-wrap">
                        <i className="fas fa-building"></i>
                    </div>
                    <div className="cg-area__name-wrap">
                        {area.pre_name && (
                            <span className="cg-area__pre-name">{area.pre_name}</span>
                        )}
                        <span className="cg-area__name">{area.name}</span>
                    </div>
                </div>
                <div className="cg-area__header-right">
                    {hasChildren && (
                        <span className="cg-area__badge">
                            {area.children.length} dependencia
                            {area.children.length !== 1 ? "s" : ""}
                        </span>
                    )}
                    {hasContent ? (
                        <svg
                            className="cg-area__arrow"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    ) : (
                        <span className="cg-area__no-data">Sin datos</span>
                    )}
                </div>
            </button>

            {open && hasContent && (
                <div className="cg-area__body">
                    {hasContact && (
                        <div className="cg-area__contacts">
                            <h6 className="cg-area__contacts-title">
                                <i className="fas fa-phone-alt me-2"></i>Contacto del área
                            </h6>
                            {area.contact.map((item, idx) => (
                                <ContactItem
                                    key={idx}
                                    type={item.type}
                                    value={item.value}
                                    label={item.info}
                                />
                            ))}
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
