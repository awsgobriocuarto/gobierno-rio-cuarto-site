"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NewsCarousel({ posts = [] }) {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePosts = posts
        .filter((post) => {
            const hasGallery =
                Array.isArray(post.image_gallery) && post.image_gallery.length > 0;
            return hasGallery || post.image;
        })
        .slice(0, 6);


    const getSlideImage = (post) => {
        if (Array.isArray(post.image_gallery) && post.image_gallery.length > 0) {
            const first = post.image_gallery[0];

            return typeof first === "string"
                ? first
                : first.large || first.url || first.small || post.image;
        }
        return post.image;
    };
    useEffect(() => {
        if (!carouselRef.current) return;
        let bsCarousel;
        const init = async () => {
            const { Carousel } = await import("bootstrap/dist/js/bootstrap.esm");
            bsCarousel = new Carousel(carouselRef.current, {
                interval: 5000,
                ride: "carousel",
                wrap: true,
            });


            carouselRef.current.addEventListener("slide.bs.carousel", (e) => {
                setActiveIndex(e.to);
            });
        };
        init();

        return () => {
            if (bsCarousel) bsCarousel.dispose();
        };
    }, []);

    if (slidePosts.length === 0) return null;

    return (
        <div className="news-carousel mb-5">
            <div
                ref={carouselRef}
                id="newsCarousel"
                className="carousel slide carousel-fade"
            >
                {/* Indicadores */}
                <div className="carousel-indicators">
                    {slidePosts.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target="#newsCarousel"
                            data-bs-slide-to={idx}
                            className={idx === activeIndex ? "active" : ""}
                            aria-label={`Noticia ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {slidePosts.map((post, idx) => {
                        const imgSrc = getSlideImage(post);
                        const date = post.published_at
                            ? new Date(post.published_at).toLocaleDateString("es-AR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                            : "";

                        return (
                            <div
                                key={post.id}
                                className={`carousel-item${idx === 0 ? " active" : ""}`}
                            >
                                <img
                                    src={imgSrc}
                                    className="d-block w-100 news-carousel__img"
                                    alt={post.title}
                                />
                                <div className="carousel-caption news-carousel__caption">
                                    {post.owner_area?.name && (
                                        <span className="news-carousel__badge">
                                            {post.owner_area.name}
                                        </span>
                                    )}
                                    {date && (
                                        <p className="news-carousel__date">{date}</p>
                                    )}
                                    <h2 className="news-carousel__title">{post.title}</h2>
                                    {post.excerpt && (
                                        <p className="news-carousel__excerpt">{post.excerpt}</p>
                                    )}
                                    <Link
                                        href={`/noticias/${post.slug}`}
                                        className="btn btn-success news-carousel__btn rounded-pill"
                                    >
                                        Leer noticia
                                        <i className="fas fa-chevron-right ms-2" style={{ fontSize: "0.8rem" }} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Controles prev/next */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#newsCarousel"
                    data-bs-slide="prev"
                    aria-label="Anterior"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#newsCarousel"
                    data-bs-slide="next"
                    aria-label="Siguiente"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
