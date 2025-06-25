import Image from "next/image";

export default function CardNews({ post }) {
  return (
    <div className="col-md-4 mb-4" key={post.id}>
      <div className="card">
        <img
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
