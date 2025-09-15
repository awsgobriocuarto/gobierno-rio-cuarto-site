import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";
import ListCategories from "./ui/home/ListCategories";
import ListAreas from "./ui/areas/ListAreas";
import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ListCategories />
      <ListAreas />
      <section className="mb-5">
        <div className="container">
          <HeaderSection title="Últimas Noticias" />
          <ListNews limit={6} />
        </div>
      </section>
      <section>
        <div className="container">
          <HeaderSection title="Próximos Eventos" />
          <ListEvents />
          <a
            href="https://destinoriocuarto.gob.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white"
          >
            Ver más eventos
          </a>
        </div>
      </section>
    </main>
  );
}
