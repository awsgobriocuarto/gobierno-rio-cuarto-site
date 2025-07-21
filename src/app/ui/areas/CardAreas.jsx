import Image from "next/image"; // Aunque uses <img>, es buena práctica mantenerlo si luego usas <Image>
import Link from "next/link"; // Importa el componente Link

export default function CardAreas({ post }) {
  // Genera el slug a partir del título, igual que en la página de detalle
  const slug = post.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="col-md-5 mb-5">
      {/* Envuelve toda la tarjeta con el componente Link */}
      <Link href={`/areas/${slug}`} className="text-decoration-none text-dark">
        <div className="card d-flex flex-row">
          <div>
            {/* Si estás usando <img>, asegúrate de que tus imágenes estén en la carpeta `public` */}
            <img
              src={post.image}
              alt={post.title}
              width={100}
              height={100}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
