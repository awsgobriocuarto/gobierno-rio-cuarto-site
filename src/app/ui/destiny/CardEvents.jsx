"use client";
import Image from "next/image";

export default function CardEvents({ post }) {
  return (
    <div className="col-md-10  mb-10">
      <div className="card d-flex flex-row">
        <div>
          <img
            src={post.image.mediumUrl}
            alt={post.title}
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.summary}</p>
        </div>
      </div>
    </div>
  );
}
