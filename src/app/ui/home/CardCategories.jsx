import Link from "next/link";

export default function CardCategories({ category }) {
  return (
    <div className="col-md-5 mb-5">
      <div className="card ">
        <Link href={`/tramites?category=${category.slug}`}>
          <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div className="card-icon ">
                <i className={`fas fa-3x ${category.image}`}></i>
              </div>
            </div>
            <div className="col-10 d-flex align-items-center justify-content-center">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.name}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
