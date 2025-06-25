import Image from "next/image";
import Slides from "./ui/home/Slides";
import CardNews from "./ui/news/CardNews";
import CardFormalities from "./ui/formalities/CardFormalities";
import { formalities } from "./ui/formalities/formalities";
import { news } from "./ui/news/news";
import CardEvents from "./ui/destiny/CardEvents";
import CardAreas from "./ui/areas/CardAreas";
import ListFormalities from "./ui/formalities/ListFormalities";
import ListNews from "./ui/news/ListNews";

export default function Home() {
  return (
    <div>
      <main>
        <Slides />
        <div className="container mt-5">
          <div className="mb-5 text-primary">Gobierno Rio Cuarto</div>
        </div>
        <ListFormalities></ListFormalities>
        {/* <h2 className="mb-5 text-center">Tramites</h2>
        <div className="row justify-content-center">
          {formalities.map((item) => (
            <CardAreas key={item.id} post={item} />
          ))}
        </div>
        <h2 className="mb-5 text-center">Areas</h2>
        <div className="row justify-content-center">
          {formalities.map((item) => (
            <CardFormalities key={item.id} post={item} />
          ))}
        </div> */}
        <h2 className="mb-5 text-center">Eventos</h2>
        <div className="row justify-content-center gap-3">
          {news.map((item) => (
            <CardEvents key={item.id} post={item} />
          ))}
        </div>
        <ListNews></ListNews>
      </main>
    </div>
  );
}
