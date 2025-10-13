import Link from "next/link";

export default function CardProgram({ program }) {
  //console.log(program);

  return (
    <Link
      href={`/seccion/${program.slug}`}
      className="buttons"
    >

      <div className="card bg-primary program-card d-none">
        <div className="card-body">
          {program.thumbnail && (
            <div>
              {/* eslint-disable-next-line */}
              <img
                src={program.thumbnail}
                alt=""
                className="rounded program-image"
              />
            </div>
          )}
          <div>
            <h5 className="card-title text-white mb-0">{program.title}</h5>
            <p><small>{program.area.name}</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-3">
            <div className="card-img">
              {/* eslint-disable-next-line */}
              <img
                src={program.thumbnail}
                alt=""
                className="rounded program-image"
              />
            </div>
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">
                {program.title}
              </h5>
              <p><small>{program.area.name}</small></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
