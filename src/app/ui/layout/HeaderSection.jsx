import ListIcons from "../icons/ListIcons";

const DEFAULT_ICONS = [
  { name: "circles", color: "yellow", size: "30" },
  { name: "squares", color: "pink", size: "30" },
  { name: "waves", color: "lightblue", size: "30" },
];

const WHITE_ICONS = [
  { name: "circles", color: "white", size: "30" },
  { name: "squares", color: "white", size: "30" },
  { name: "waves", color: "white", size: "30" },
];

export default function HeaderSection({
  title = "Titulo de la Seccion",
  subtitle = "",
  description = "",
  border = false,
  bgImage = null,
}) {
  const isHumanized = !!bgImage;
  const icons = isHumanized ? WHITE_ICONS : DEFAULT_ICONS;

  return (
    <div
      className={`header ${border ? "header-border" : ""} ${
        isHumanized ? "header-humanized" : ""
      }`}
      style={isHumanized ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {isHumanized && <div className="header-overlay"></div>}

      {isHumanized ? (
        <div className="header-content">
          <div className="header-icons">
            <ListIcons icons={icons} />
          </div>

          <div className="header-text">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {description && (
              <div className="header-description">{description}</div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="header-icons">
            <ListIcons icons={icons} />
          </div>

          <div className="header-text">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {description && (
              <div className="header-description">{description}</div>
            )}
          </div>
        </>
      )}

      <div className="header-form"></div>
    </div>
  );
}
