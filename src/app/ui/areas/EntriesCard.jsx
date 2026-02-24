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
    <Link
      href={`/seccion/${entry.slug}`}
      className="text-decoration-none text-dark d-block h-100"
    >
      <div className="card card-entry-clean h-100 transition-hover">
        <div className="card-body">
          <div className="entry-icon-container">
            {hasThumbnail ? (
              // eslint-disable-next-line
              <img src={entry.thumbnail} alt="" className="entry-thumbnail" />
            ) : (
              <Icon
                icon={{
                  name: iconName,
                  color: iconColor,
                  size: "26",
                }}
              />
            )}
          </div>
          <div className="entry-content">
            {entry.type === "other" && (
              <span className="entry-pretitle">{entry.pretitle}</span>
            )}
            <h5 className="entry-title">{entry.title}</h5>
          </div>
          <div className="entry-arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
