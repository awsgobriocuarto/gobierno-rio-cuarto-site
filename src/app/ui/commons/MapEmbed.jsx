// // components/MapEmbed.jsx

// import React from "react";

// /**
//  * Constante que proporciona el contexto geográfico (Ciudad, Provincia, País).
//  * Esto se concatena a la dirección base para asegurar la precisión del mapa de Google.
//  */
// const CONTEXT_LOCATION = ", Río Cuarto, Córdoba, Argentina";

// /**
//  * Componente para incrustar un mapa de Google Maps a partir de una dirección base.
//  * Completa la dirección con datos de contexto (ciudad, provincia).
//  * * @param {string} address - La dirección base (e.g., "Baigorria 26").
//  * @param {string} [height='450px'] - Altura del iframe.
//  */
// export default function MapEmbed({ address, height = "450px", area = "" }) {
//   if (!address) {
//     return null;
//   }

//   // CONSTRUCCIÓN DEL FULL ADDRESS: Aquí se añade el contexto de la ciudad.
//   // Ejemplo: "Baigorria 26" + ", Río Cuarto, Córdoba, Argentina"
//   const fullAddress = address + CONTEXT_LOCATION;

//   // 1. Codificación de la dirección COMPLETA para la URL
//   const encodedAddress = encodeURIComponent(fullAddress);

//   // 2. Construcción de la URL de incrustación (sin necesidad de API Key)
//   const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

//   return (
//     <div className="map-container">
//       <iframe
//         src={mapUrl}
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title={`Ubicación de ${area ? area : fullAddress} en Google Maps`}
//         className="map"
//       />
//     </div>
//   );
// }
