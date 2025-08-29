import Slides from "./ui/home/Slides";
import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";
import ListCategories from "./ui/home/ListCategories";
import ListAreas from "./ui/areas/ListAreas";

export default function Home() {
  return (
    <main>
      <Slides />
      <ListCategories />
      <ListAreas />
      <ListEvents />
      <ListNews />
    </main>
  );
}
