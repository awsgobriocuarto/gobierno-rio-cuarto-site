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
        <div className="container mt-5">
          <div className="mb-5 text-primary">Gobierno Rio Cuarto</div>
        </div>
        <ListCategories></ListCategories>
        <ButtonFormalities></ButtonFormalities>
        <ListAreas></ListAreas>
        <ListEvents></ListEvents>
        <ListNews></ListNews>
      </main>
    </div>
  );
}
