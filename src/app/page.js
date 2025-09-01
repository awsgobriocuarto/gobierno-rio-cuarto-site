
import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";
import ListCategories from "./ui/home/ListCategories";
import ListAreas from "./ui/areas/ListAreas";
import Hero from "./ui/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ListCategories />
      <ListAreas />
      <ListEvents />
      <ListNews />
    </main>
  );
}
