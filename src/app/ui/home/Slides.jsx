"use client";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

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
              <div className="row g-0 hero-split-row">
                {/* Lado Imagen - 50/50 para ver foto completa */}
                <div className="col-12 col-md-6 h-100 hero-img-col">
                  {/* eslint-disable-next-line */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100 h-100 hero-split-image"
                  />
                </div>

                {/* Lado Texto - 50/50 */}
                <div className="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center p-4 p-md-5 hero-text-col position-relative">
                  <div className="w-100">
                    <h3
                      className="text-white fw-bold hero-title mb-3"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className="text-white lead mb-4 hero-excerpt"
                        style={{
                          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="btn btn-outline-light btn-rounded-custom px-4 py-2 mb-3"
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
