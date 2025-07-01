import Image from "next/image";
import Link from "next/link";

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
          <Link className="card-title" href={`/news/${post.slug}`}>
            {post.title}
          </Link>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
