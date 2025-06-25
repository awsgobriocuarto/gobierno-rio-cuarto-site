import Image from "next/image";

export default function CardEvents({ post }) {
  return (
    <div className="col-md-10  mb-10">
      <div className="card d-flex flex-row">
        <div>
          <Image
            src={post.image}
            alt={post.title}
            width={100}
            height={100}
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
