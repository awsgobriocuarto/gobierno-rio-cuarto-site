import Link from "next/link";

export default function CardProgram({ program }) {
  return (
    <Link
      href={`/programas/${program.slug}`}
      className="text-decoration-none text-dark w-100"
    >
      <div className="card bg-primary program-card">
        <div className="card-body">
          {program.thumbnail && (
            <div>
              <img
                src={program.thumbnail}
                alt=""
                className="rounded program-image"
              />
            </div>
          )}
          <h5 className="card-title text-white mb-0">{program.title}</h5>
        </div>
      </div>
    </Link>
  );
}
