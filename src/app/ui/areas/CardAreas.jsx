<<<<<<< HEAD
import Link from "next/link";

export default function CardAreas({ area }) {
=======
import { fetchAreas } from "@/app/lib/DataFormalities";
import Image from "next/image"; // Mantener si hay planes de usarlo
import Link from "next/link"; // Importa el componente Link

export default function CardAreas({ area }) {
  // Genera el slug a partir del título, igual que en la página de detalle
>>>>>>> 86a554de9f4ec2dbb8a5143e63338958a823a4f2
  return (
    <div className="col-12 col-md-4 mb-4">
      <Link
        href={`/areas/${area.slug}`}
        className="text-decoration-none text-dark w-100"
      >
<<<<<<< HEAD
        <div className="card d-flex flex-row overflow-hidden">
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{area.name}</h5>
=======
        <div className="card d-flex flex-row overflow-hidden ">
          {/* card-body: Ocupa el resto del espacio disponible gracias a Flexbox. */}
          <div className="card-body flex-grow-1 ">
            <h5 className="card-title ">{area.name}</h5>
            {/* <p className="card-text">{post.description}</p> */}
>>>>>>> 86a554de9f4ec2dbb8a5143e63338958a823a4f2
          </div>
        </div>
      </Link>
    </div>
  );
}
