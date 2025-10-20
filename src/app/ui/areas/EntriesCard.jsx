import Link from "next/link";
import Icon from "../icons/Icon";

const ICON_NAMES = ["circles", "squares", "waves"];
const ICON_COLORS = ["green", "lightblue", "orange", "pink", "yellow"];

export default function EntriesCard({ entry }) {
  const hasThumbnail = entry.thumbnail && entry.thumbnail.length > 0;

  const iconId = entry.id ? parseInt(entry.id, 10) : 0;

  const iconName = ICON_NAMES[iconId % ICON_NAMES.length];
  const iconColor = ICON_COLORS[iconId % ICON_COLORS.length];

  const iconSize = "50";
  return (
    <Link href={`/seccion/${entry.slug}`}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-3">
            {hasThumbnail ? (
              <div className="card-img">
                {/* eslint-disable-next-line */}
                <img src={entry.thumbnail} alt="" className="rounded" />
              </div>
            ) : (
              <div className="card-icon">
                <Icon
                  icon={{
                    name: iconName,
                    color: iconColor,
                    size: iconSize,
                  }}
                />
              </div>
            )}
          </div>
          <div className="col-9">
            <div className="card-body">
              {entry.type == "other" ? (
                <h6 className="card-pretitle">{entry.pretitle}</h6>
              ) : (
                ""
              )}
              <h5 className="card-title">{entry.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
