import Link from "next/link";

export default function CardAreas({ area }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="text-decoration-none text-dark w-100"
    >
      <div className="card mb-3">

        <div className="card-body">
          <h5 className="card-title">{area.name}</h5>
        </div>
      </div>
    </Link>

  );
}
