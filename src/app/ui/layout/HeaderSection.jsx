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
}) {
  return (
    <div className="header">
      <div>
        <h2>
          <ListIcons icons={LIST_OF_ICONS}></ListIcons>
          {title}
        </h2>
        {subtitle ? <p className="lead">{subtitle}</p> : ""}
      </div>
    </div>
  );
}
