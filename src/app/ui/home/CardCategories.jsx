import Link from "next/link";

export default function CardCategories({ category }) {
  return (
    <article className="col-md-4 mb-3">
      <main className="card ">
        <Link
          className="text-decoration-none"
          href={`/tramites?category=${category.slug}`}
        >
          <div className="row">
            <section className="col-2 d-flex align-items-center justify-content-center">
              <figure className="card-icon ">
                <i className={`fas fa-3x ${category.image}`}></i>
              </figure>
            </section>
            <section className="col-10 d-flex align-items-center justify-content-center">
              <div className="card-body">
                <h5 className="card-title text-black ">{category.name}</h5>
              </div>
            </section>
          </div>
        </Link>
      </main>
    </article>
  );
}
