import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";
import ListAreas from "./ui/areas/ListAreas";
import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import ListFormalityCategories from "./ui/home/ListCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <ListFormalityCategories />
      <ListAreas />
      <div className="container">
        <HeaderSection title="Últimas Noticias" border />
        <ListNews limit={6} />
      </div>
      <ListEvents />
    </main>
  );
}
