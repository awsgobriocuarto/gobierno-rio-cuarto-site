import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";
import ListAreas from "./ui/areas/ListAreas";
import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import ListFormalityCategories from "./ui/home/ListCategories";
import Link from "next/link";
import BannerList from "./ui/home/BannerList";

export const revalidate = 60; // revalida la página cada 60s

export default async function Home() {
  return (
    <main>
      <Hero />
      <BannerList />
      <ListFormalityCategories />
      <ListAreas />
      <ListNews limit={6} isHome={true} />

      <ListEvents />
    </main>
  );
}
