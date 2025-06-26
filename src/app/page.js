import Slides from "./ui/home/Slides";
import ListFormalities from "./ui/formalities/ListFormalities";
import ListNews from "./ui/news/ListNews";
import ListEvents from "./ui/destiny/ListEvents";

export default function Home() {
  return (
    <div>
      <main>
        <Slides />
        <div className="container mt-5">
          <div className="mb-5 text-primary">Gobierno Rio Cuarto</div>
        </div>
        <ListFormalities></ListFormalities>

        <ListEvents></ListEvents>

        <ListNews></ListNews>
      </main>
    </div>
  );
}
