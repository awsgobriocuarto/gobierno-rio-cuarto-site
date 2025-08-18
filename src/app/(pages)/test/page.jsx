import ListIcons from "@/app/ui/icons/ListIcons";
import React from "react";

const LIST_OF_ICONS = [
  {
    name: "waves",
    color: "lightblue",
    size: "100",
  },
];

export default function Test() {
  return (
    <div className="container my-5">
      <ListIcons icons={LIST_OF_ICONS} />
    </div>
  );
}
