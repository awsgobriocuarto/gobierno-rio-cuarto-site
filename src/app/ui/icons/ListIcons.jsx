import React from "react";
import Icon from "./Icon";

export default function ListIcons({ icons }) {
  return (
    <div className="icons">
      {icons.map((icon) => (
        <Icon icon={icon} />
      ))}
    </div>
  );
}
