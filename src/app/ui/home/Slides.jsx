"use client";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

const HERO_ICONS = [
  { name: "circles", color: "white", size: "28" },
  { name: "squares", color: "white", size: "28" },
  { name: "waves", color: "white", size: "28" },
];

export default function Slides({ posts = [] }) {
  // Use static images as fallback if no posts are passed
  const hasPosts = posts && posts.length > 0;

  return (
    <div className="hero-slides-wrapper">
      {/* overlay MOVIDO a Hero.jsx para que NO herede la opacidad de .hero-slides */}
      <Carousel
        controls={hasPosts && posts.length > 1}
        fade={true}
        indicators={false}
      >
        {hasPosts ? (
          posts.map((post) => (
            <Carousel.Item key={post.id}>
              <div
                className="row g-0"
                style={{
                  height: "500px",
                  backgroundColor: "#343a40",
                  overflow: "hidden",
                }}
              >
                {/* Lado Imagen 60% */}
                <div className="col-12 col-lg-7 h-100">
                  {/* eslint-disable-next-line */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Lado Texto 40% */}
                <div className="col-12 col-lg-5 h-100 d-flex align-items-center justify-content-center p-4 p-md-5">
                  <div className="w-100" style={{ maxWidth: "480px" }}>
                    <h3
                      className="text-white fw-bold mb-3"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        fontSize: "2.7rem",
                      }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className="text-white mb-4"
                        style={{
                          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          fontSize: "1.25rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="btn btn-outline-light rounded-pill px-5 py-8 mb-5"
                      style={{ fontWeight: "500" }}
                    >
                      Seguir leyendo
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <>
            <Carousel.Item>
              {/* eslint-disable-next-line */}
              <img
                src="/images/gente1.jpg"
                alt="Vecinos en el parque"
                className="hero-slide-image"
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* eslint-disable-next-line */}
              <img
                src="/images/gente2.jpg"
                alt="Familia riocuartense"
                className="hero-slide-image"
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* eslint-disable-next-line */}
              <img
                src="/images/gente3.jpg"
                alt="Vecinos mayores"
                className="hero-slide-image"
              />
            </Carousel.Item>
          </>
        )}
      </Carousel>
    </div>
  );
}
