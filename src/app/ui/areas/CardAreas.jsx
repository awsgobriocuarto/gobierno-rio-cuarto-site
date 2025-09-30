import Link from "next/link";

export default function CardAreas({ area }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="text-decoration-none text-dark w-100"
    >
      <div className="card bg-primary ">
        <div className="card-body">
          <h5 className="card-title text-white">{area.name}</h5>
        </div>
      </div>
    </Link>
  );
}
