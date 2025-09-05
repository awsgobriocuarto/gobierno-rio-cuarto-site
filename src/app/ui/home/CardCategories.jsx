import Link from "next/link";

export default function CardCategories({ category }) {
  return (
    <Link
      className="text-decoration-none"
      href={`/tramites?category=${category.slug}`}
    >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-3">
            <div className="card-icon">
              <i className={`fas fa-fw fa-2xl ${category.image}`}></i>
            </div>
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
