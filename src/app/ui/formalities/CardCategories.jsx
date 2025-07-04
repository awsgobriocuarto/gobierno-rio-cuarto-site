import Image from "next/image";
import Link from "next/link";

export default function CardCategories({ post }) {
  return (
    <div className="col-md-5 mb-5">
      <div className="card ">
        <Link href={`/tramites?category=${post.slug}`}>
          <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div className="card-icon ">
                <i className={`fas fa-3x ${post.image}`}></i>
              </div>
            </div>
            <div className="col-10 d-flex align-items-center justify-content-center">
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.name}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
