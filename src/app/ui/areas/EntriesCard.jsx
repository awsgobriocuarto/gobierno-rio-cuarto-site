import Link from "next/link";
import Icon from "../icons/Icon";

export default function EntriesCard({ entry }) {
  const hasThumbnail = entry.thumbnail && entry.thumbnail.length > 0;

  return (
    <Link
      href={`/seccion/${entry.slug}`}
    >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-3">
            {hasThumbnail ? (
              <div className="card-img">
                {/* eslint-disable-next-line */}
                <img
                  src={entry.thumbnail}
                  alt=""
                  className="rounded"
                />
              </div>
            ) : (
              <div className="card-icon">
                <Icon icon={{ name: "waves", color: "pink", size: "50" }} />
              </div>
            )}
          </div>
          <div className="col-9">
            <div className="card-body">
              {entry.type == 'other' ? <h6 className="card-pretitle">{entry.pretitle}</h6> : ""}
              <h5 className="card-title">{entry.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
