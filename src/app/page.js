import Slides from "./ui/home/Slides";
import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";

import ButtonFormalities from "./ui/formalities/ButtonFormalities";
import ListCategories from "./ui/home/ListCategories";
import ListAreas from "./ui/areas/ListAreas";

export default function Home() {
  return (
    <div>
      <main>
        <Slides />
        <ListCategories></ListCategories>
        <ListAreas></ListAreas>
        <ListEvents></ListEvents>
        <ListNews></ListNews>
      </main>
    </div>
  );
}
