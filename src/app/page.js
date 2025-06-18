import Slides from "./ui/home/Slides";

export default function Home() {
  return (
    <div>

      <main>
        <Slides />
        <div className="mb-5 text-primary">
          Gobierno Rio Cuarto
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Lorem ipsum dolor sit amet.</h3>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex culpa officia animi fugiat vel perferendis consequatur, quisquam at sit.</p>
            <a href="" className="btn btn-primary text-white">warning</a>
          </div>
        </div>
      </main>
    </div>
  );
}
