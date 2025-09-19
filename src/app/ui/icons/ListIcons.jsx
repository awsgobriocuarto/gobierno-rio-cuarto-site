import React from "react";
import Icon from "./Icon";

export default function ListIcons({ icons }) {
  return (
    <div className="d-inline-flex icons">
      {icons.map((icon) => (
        <Icon icon={icon} key={icon.name} />
      ))}
    </div>
  );
}
