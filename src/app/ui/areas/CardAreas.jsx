import Image from "next/image"; // Mantener si hay planes de usarlo
import Link from "next/link"; // Importa el componente Link

export default function CardAreas({ post }) {
  // Genera el slug a partir del título, igual que en la página de detalle
  const slug = post.title.toLowerCase().replace(/\s+/g, "-");

  return (
    // col-12 col-md-5: La tarjeta ocupa todo el ancho en móviles y 5 columnas en pantallas medianas.
    <div className="col-12 col-md-5 mb-4">
      {" "}
      {/* Cambié mb-5 a mb-4 para un espaciado más común */}
      {/* card d-flex flex-row: La tarjeta es un contenedor flex en fila.
          overflow-hidden: Asegura que el contenido desbordado se recorte.
      */}
      <Link
        href={`/areas/${slug}`}
        className="text-decoration-none text-dark w-100"
      >
        <div className="card d-flex flex-row overflow-hidden">
          {/* Contenedor de la Imagen: Usamos clases de columna para ancho responsivo.
              col-4: Ocupa 4/12 (33.3%) en pantallas pequeñas.
              col-lg-3: Ocupa 3/12 (25%) en pantallas grandes.
              min-height: Establece una altura mínima para el contenedor de la imagen, crucial para la visualización.
              d-flex align-items-center justify-content-center: Centra la imagen vertical y horizontalmente.
              p-0: Elimina el padding predeterminado de las columnas.
          */}
          <div
            className="col-4 col-lg-3 p-0 d-flex align-items-center justify-content-center"
            style={{ minHeight: "120px" }} // Ajusta esta altura según tus necesidades y el tamaño de tus imágenes
          >
            <img
              src={post.image}
              alt={post.title}
              // h-100 y w-100: La imagen ocupa el 100% de la altura y ancho de su contenedor.
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }} // Recorta la imagen para que llene el espacio sin distorsionarse
            />
          </div>

          {/* card-body: Ocupa el resto del espacio disponible gracias a Flexbox. */}
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
