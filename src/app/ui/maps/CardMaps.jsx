import Link from "next/link";

export default function CardMaps({ map }) {
  const mapUrl = `/mapas/${map.slug}`;

  return (
    <div className="col-lg-6 col-xl-4 mb-4 ">
      <div className="card">
        <div className="card-img-top">
          <Link href={mapUrl} className="">
            {/* eslint-disable-next-line */}
            <img
              src={map.thumbnail}
              alt={map.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        <div className="card-body">
          <Link href={mapUrl} className="">
            <h3 className="card-title text-primary">{map.title}</h3>
          </Link>
          <p className="card-text">{map.summary}</p>
        </div>

        <div className="card-footer border-0 bg-white">
          <span>
            <Link href={mapUrl} className="">
              Ver más
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
