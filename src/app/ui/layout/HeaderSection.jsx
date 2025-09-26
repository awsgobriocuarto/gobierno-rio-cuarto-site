import ListIcons from "../icons/ListIcons";

const LIST_OF_ICONS = [
  { name: "circles", color: "yellow", size: "30" },
  { name: "squares", color: "pink", size: "30" },
  {
    name: "waves",
    color: "lightblue",
    size: "30",
  },
];

export default function HeaderSection({
  title = "Titulo de la Seccion",
  subtitle = "",
  border = false
}) {
  return (
    <div className={`header ${border ? "header-border" : ""}`}>
      <div className="header-icons">
        <ListIcons icons={LIST_OF_ICONS}></ListIcons>
      </div>
      <div className="header-text">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : ""}
      </div>
      <div className="header-form">

      </div>
    </div>
  );
}
