"use client";
import { useState } from "react";
import ContactItem from "../commons/ContactItem";

export default function AreaDetail({ area, formality }) {
  // Estado para controlar qué items están expandidos
  // Por defecto, el primer item (índice 0) está expandido
  const [expandedItems, setExpandedItems] = useState([0]);

  const toggleItem = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  if (!formality && (!area.children || area.children.length === 0)) {
    return null;
  }

  return (
    <section>
      <div className={`card ${!formality ? "card-dependencias" : ""}`}>
        <div className="card-header">
          <h6 className="mb-0">
            {formality ? "Entidad Responsable" : "Dependencias"}
          </h6>
        </div>
        <div className="card-body">
          {formality && (
            <>
              <h5>{area.name}</h5>
              {area.contact.map((item, index) => (
                <ContactItem
                  key={item.index}
                  type={item.type}
                  value={item.value}
                  label={item.info}
                />
              ))}
            </>
          )}
          {formality
            ? area.parent && (
              <>
                <hr />
                <div>
                  <b>{area.parent.name}</b>
                </div>
                {area.parent.contact.map((item, index) => (
                  <ContactItem
                    key={item.index}
                    type={item.type}
                    value={item.value}
                    label={item.info}
                  />
                ))}
              </>
            )
            : area.children &&
            area.children.length > 0 && (
              <div className="accordion-dependencias">
                {area.children.map((child, index) => {
                  const isExpanded = expandedItems.includes(index);
                  return (
                    <div
                      key={child.id || index}
                      className={`accordion-item ${isExpanded ? "expanded" : ""}`}
                    >
                      <button
                        className="accordion-header"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isExpanded}
                      >
                        <h6 className="accordion-title">{child.name}</h6>
                        <svg
                          className="accordion-icon"
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
                      </button>
                      {isExpanded && (
                        <div className="accordion-content">
                          {child.contact &&
                            child.contact.map((item, idx) => (
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
                })}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
