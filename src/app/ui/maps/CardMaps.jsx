import Link from "next/link";

export default function CardMaps({ map }) {
  return (
    <Link href={`/mapas/${map.slug}`} className="">
      <div className="col-lg-6 col-xl-4 mb-4 ">
        <div className="card">
          <div className="card-img-top">
            {/* eslint-disable-next-line */}
            <img
              src={map.thumbnail}
              alt={map.title}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">{map.summary}</p>
          </div>
          <div className="card-footer border-0 bg-white"></div>
        </div>
      </div>
    </Link>
  );
}
