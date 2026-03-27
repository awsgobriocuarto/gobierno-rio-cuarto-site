import Link from "next/link";

export default function CardMaps({ map }) {
  const mapUrl = `/mapas/${map.slug}`;

  return (
    <div className="col-lg-6 col-xl-4 mb-4 ">
      <div className="card card-map h-100">
        <div className="card-img-top">
          <Link href={mapUrl} className="">
            {/* eslint-disable-next-line */}
            <img
              src={map.thumbnail ? map.thumbnail : "/images/no-image.jpg"}
              alt={map.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        <div className="card-body">
          <Link href={mapUrl} className="text-decoration-none">
            <h3 className="card-title text-dark">{map.title}</h3>
          </Link>
          <p className="card-text">{map.summary}</p>
        </div>

        <div className="card-footer border-0 bg-white d-flex justify-content-end">
          <Link
            href={mapUrl}
            className="text-primary text-decoration-none fw-bold d-flex align-items-center"
          >
            Ver más <i className="fas fa-chevron-right ms-2" style={{ fontSize: '0.8rem' }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
