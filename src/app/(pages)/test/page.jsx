import ListIcons from "@/app/ui/icons/ListIcons";
import React from "react";
import TestTitles from "./components/TestTitles";
import TestCardNews from "./components/TestCardNews";
import TestCardButtons from "./components/TestCardButtons";

const LIST_OF_ICONS = [
  {
    name: "waves",
    color: "lightblue",
    size: "100",
  },
];

export default function Test() {
  return (
    <div className="container my-5 test">
      <ListIcons icons={LIST_OF_ICONS} />
      <hr className="my-5" />
      <TestTitles />
      <hr className="my-5" />
      <TestCardNews />
      <hr className="my-5" />
      <TestCardButtons />
      <hr className="my-5" />
    </div>
  );
}
