import Link from "next/link";
import Icon from "../icons/Icon";

export default function CardOther({ other }) {
  const hasThumbnail = other.thumbnail && other.thumbnail.length > 0;

  return (
    <Link
      href={`/otros/${other.slug}`}
      className="text-decoration-none text-dark w-100"
    >
      <div className="card bg-primary other-card">
        <div className="card-body d-flex align-items-center">
          {hasThumbnail ? (
            <div>
              <img
                src={other.thumbnail}
                alt=""
                className="rounded other-image"
              />
            </div>
          ) : (
            <div className="placeholder-icon-container bg-light rounded  ">
              <Icon icon={{ name: "waves", color: "pink", size: "50" }} />
            </div>
          )}
          <div className="text-content ms-3">
            <h6 className="card-subtitle">{other.pretitle}</h6>
            <h5 className="card-title text-white mb-0">{other.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
