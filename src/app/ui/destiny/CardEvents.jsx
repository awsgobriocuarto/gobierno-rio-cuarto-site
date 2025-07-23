"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardEvents({ post }) {
  return (
    // col-md-10 mb-10: Este es el contenedor exterior para la tarjeta.
    // Considera usar col-12 en pantallas pequeñas y col-md-10 para asegurar que la tarjeta tenga buen tamaño.
    <div className="col-12 col-md-10 mb-10">
      {/* card d-flex flex-row: La tarjeta es un contenedor flex en fila. */}
      <div className="card d-flex flex-row mb-3 ">
        {/* Link: Ocupa todo el ancho de la tarjeta para que sea clickeable. */}
        <Link
          href={`https://destinoriocuarto.gob.ar/evento/${post.id}/${post.slug}`}
          className="d-flex flex-row text-decoration-none text-black w-100"
          target="_blank"
        >
          {/* Contenedor de la Imagen: Usamos clases de columna de Bootstrap para el ancho responsive. */}
          {/* col-4: En pantallas pequeñas, la imagen ocupará 4 de 12 columnas (aprox 33%). */}
          {/* col-lg-3: En pantallas grandes (lg y superiores), ocupará 3 de 12 (25%). 
             Puedes ajustar estos valores (col-4, col-lg-3) para acercarte al 35% que deseas,
             o usar una clase personalizada si necesitas más precisión.
          */}
          <div className="col-4  col-lg-3 p-0">
            {" "}
            {/* p-0 para eliminar el padding de columna si lo deseas */}
            <img
              src={post.image.mediumUrl}
              alt={post.title}
              className="img-fluid h-100" // img-fluid para responsividad, h-100 para altura completa del div padre
              style={{ objectFit: "cover" }} // Escala y recorta la imagen para llenar el espacio
            />
          </div>

          {/* card-body: Ocupa el resto del espacio disponible gracias a Flexbox. */}
          {/* flex-grow-1: Permite que el card-body crezca y ocupe el espacio restante. */}
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.summary}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
