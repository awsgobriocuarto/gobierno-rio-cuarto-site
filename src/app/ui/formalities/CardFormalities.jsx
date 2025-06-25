import Image from "next/image";

export default function CardFormalities({ post }) {
  return (
    <div className="col-md-5 mb-5">
      <div className="card ">
        <div className="row">
          <div className="col-2 d-flex align-items-center justify-content-center">
            <div className="card-icon ">
              <i className={`fas fa-3x ${post.image}`}></i>
            </div>
          </div>
          <div className="col-10 d-flex align-items-center justify-content-center">
            <div className="card-body">
              <h5 className="card-title">{post.name}</h5>
              <p className="card-text">{post.slug}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
