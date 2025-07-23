import Link from "next/link";

export default function CardCategories({ category }) {
  return (
    <div className="col-md-5 mb-5">
      <div className="card ">
        <Link
          className="text-decoration-none"
          href={`/tramites?category=${category.slug}`}
        >
          <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div className="card-icon ">
                <i className={`fas fa-3x ${category.image}`}></i>
              </div>
            </div>
            <div className="col-10 d-flex align-items-center justify-content-center">
              <div className="card-body">
                <h5 className="card-title text-black ">{category.name}</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
