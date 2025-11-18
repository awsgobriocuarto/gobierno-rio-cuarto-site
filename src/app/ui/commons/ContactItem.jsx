// components/ContactItem.jsx

import React from 'react';
import Link from 'next/link';

// 1. Mapeo de Iconos
const ICONS = {
  address: <i className="fas fa-fw fa-location-dot"></i>,
  phone: <i className="fas fa-fw fa-phone"></i>,
  schedules: <i className="fas fa-fw fa-clock"></i>,
  web: <i className="fas fa-fw fa-globe"></i>,
  email: <i className="fas fa-fw fa-envelope"></i>,
  // Redes Sociales y WhatsApp
  whatsapp: <i className="fab fa-fw fa-whatsapp"></i>,
  facebook: <i className="fab fa-fw fa-facebook"></i>,
  instagram: <i className="fab fa-fw fa-instagram"></i>,
  twitter: <i className="fab fa-fw fa-twitter"></i>,
  youtube: <i className="fab fa-fw fa-youtube"></i>,
  tiktok: <i className="fab fa-fw fa-tiktok"></i>,
};

// Función de utilidad para limpiar números de teléfono
const cleanValue = (value) => value.replace(/[\s()-]/g, '');

/**
 * Genera el href semántico y determina el target.
 */
const getLinkDetails = (type, value) => {
  let href = null;
  let target = '_self';
  let isLink = true;

  switch (type) {
    case 'phone':
      href = `tel:${cleanValue(value)}`;
      break;
    case 'whatsapp':
      href = `https://wa.me/${cleanValue(value)}`;
      target = '_blank';
      break;
    case 'email':
      href = `mailto:${value}`;
      break;
    case 'web':
    case 'facebook':
    case 'instagram':
    case 'twitter':
    case 'youtube':
    case 'tiktok':
      // Aseguramos protocolo para enlaces externos
      href = value.startsWith('http') ? value : `https://${value}`;
      target = '_blank';
      break;
    case 'address':
      // Enlace a Google Maps
      href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
      target = '_blank';
      break;
    default:
      // schedules, o cualquier otro tipo que no deba ser un link
      isLink = false;
      break;
  }

  return { href, target, isLink };
};

/**
 * Componente reutilizable para renderizar un elemento de contacto.
 * @param {string} type - El tipo de contacto.
 * @param {string} value - El valor del dato de contacto (URL, número, email).
 * @param {boolean} isSocial - Indica si es un icono social (solo icono, sin texto).
 * @param {string | null} label - Texto opcional a mostrar encima del valor (e.g., "URGENCIAS").
 */
export default function ContactItem({ type, value, isSocial = false, label = null }) {
  if (!value) return null;

  const icon = ICONS[type] || null;
  const { href, target, isLink } = getLinkDetails(type, value);
  let displayValue = value;

  // Lógica para mostrar el nombre de la red social en lugar de la URL completa
  if (['facebook', 'instagram', 'twitter', 'youtube', 'tiktok'].includes(type) && !isSocial) {
    displayValue = type.charAt(0).toUpperCase() + type.slice(1);
  }

  // 1. Caso de Enlaces de Redes Sociales (SOLO ÍCONO)
  if (isSocial) {
    if (!isLink) return null;

    // Usamos el nombre de la red (displayValue) para la accesibilidad (aria-label)
    const socialName = type.charAt(0).toUpperCase() + type.slice(1);

    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label={`Enlace a ${socialName}`}
        className="" // Clases para íconos sociales
      >
        {icon}
      </Link>
    );
  }

  // 2. Caso de Enlaces o Información Simple (Teléfono, Email, Dirección, etc.)

  // Contenido visual (Icono y Texto/Label)
  const Content = (
    <>
      {icon && <span className="contact-item--icon">{icon}</span>}
      <div className="contact-item--info">
        <span className="contact-item--text">{displayValue} </span>
        {label && (
          <span className="contact-item--label"
            style={{ fontSize: '0.75rem', lineHeight: 1 }}>({label})</span>
        )}
      </div>
    </>
  );

  if (isLink) {
    return (
      <div className="contact-item">
        <Link
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="contact-item--link"
        >
          {Content}
        </Link>
      </div>
    );
  }

  // Si es solo información de texto (ej. schedules)
  return (
    <div className="p-2 border-start border-3 border-primary d-flex align-items-center">
      {Content}
    </div>
  );
}