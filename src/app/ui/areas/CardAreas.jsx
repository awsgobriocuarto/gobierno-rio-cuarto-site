import Link from "next/link";

export default function CardAreas({ area }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <Link
        href={`/areas/${area.slug}`}
        className="text-decoration-none text-dark w-100"
      >
        <div className="card d-flex flex-row overflow-hidden">
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{area.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
