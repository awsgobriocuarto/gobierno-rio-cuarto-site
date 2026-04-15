"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import ListIcons from "../icons/ListIcons";

const HERO_ICONS = [
  { name: "circles", color: "white", size: "20" },
  { name: "squares", color: "white", size: "20" },
  { name: "waves", color: "white", size: "20" },
];

export default function Slides({ posts = [] }) {
  const hasPosts = posts && posts.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-slides-wrapper">
      <Carousel
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        controls={false}
        fade={true}
        indicators={false}
      >
        {hasPosts ? (
          posts.map((post) => (
            <Carousel.Item key={post.id}>
              <div className="row g-0 hero-split-row">
                {/* Columna imagen */}
                <div className="col-12 col-md-6 h-100 hero-img-col">
                  {/* eslint-disable-next-line */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100 h-100 hero-split-image"
                  />
                </div>

                {/* Columna texto */}
                <div className="col-12 col-md-6 h-100 p-4 p-md-6 hero-text-col position-relative bg-primary">
                  {/* Iconos en la esquina superior derecha del panel celeste */}
                  <div className="hero-slides-icons" aria-hidden="true">
                    <ListIcons icons={HERO_ICONS} />
                  </div>
                  <div className="w-100 hero-text-content">
                    {post.owner_area.name && (
                      <p
                        className="hero-owner-area"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgb(0, 0, 0)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {post.owner_area.name}
                      </p>
                    )}
                    <h3
                      className="fw-bold hero-title mb-3"
                      style={{ color: "#ffffff" }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className="mb-4 hero-excerpt"
                        style={{
                          color: "rgb(255, 255, 255)",
                          fontSize: "1.1rem",
                          lineHeight: "1.2",
                          fontWeight: "600",
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <div className="hero-cta-row w-100 mt-3">
                      <Link
                        href={`/noticias/${post.slug}`}
                        className="btn btn-light btn-rounded-custom d-inline-flex align-items-center px-4 py-2"
                        style={{ fontWeight: "600", color: "#009de0" }}
                      >
                        Seguir leyendo
                      </Link>
                      {posts.length > 1 && (
                        <div
                          className="hero-indicators"
                          aria-label="Indicadores de noticias"
                        >
                          {posts.map((_, i) => (
                            <button
                              key={i}
                              className={`hero-indicator${i === activeIndex ? " active" : ""}`}
                              onClick={() => setActiveIndex(i)}
                              aria-label={`Ir a noticia ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
}
