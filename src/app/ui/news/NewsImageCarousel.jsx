"use client";

import { useEffect, useRef, useState } from "react";

export default function NewsImageCarousel({ imageGallery = [] }) {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Normaliza cada elemento: soporta string URL u objeto { large, small, url, alt }
    const slides = imageGallery
        .map((item) => {
            if (typeof item === "string") {
                return { src: item, alt: "" };
            }
            return {
                src: item.large || item.url || item.small || "",
                alt: item.alt || item.caption || "",
            };
        })
        .filter((s) => s.src);

    useEffect(() => {
        if (!carouselRef.current || slides.length <= 1) return;
        let bsCarousel;
        const init = async () => {
            const { Carousel } = await import("bootstrap/dist/js/bootstrap.esm");
            bsCarousel = new Carousel(carouselRef.current, {
                interval: 4000,
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
    }, [slides.length]);

    if (slides.length === 0) return null;

    // Con una sola imagen mostramos solo la imagen, sin controles
    if (slides.length === 1) {
        return (
            <div className="news-img-carousel news-img-carousel--single">
                {/* eslint-disable-next-line */}
                <img
                    src={slides[0].src}
                    alt={slides[0].alt}
                    className="news-img-carousel__img"
                />
            </div>
        );
    }

    return (
        <div className="news-img-carousel">
            <div
                ref={carouselRef}
                id="newsImgCarousel"
                className="carousel slide"
                data-bs-touch="false"
            >
                {/* Indicadores */}
                <div className="carousel-indicators">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target="#newsImgCarousel"
                            data-bs-slide-to={idx}
                            className={idx === activeIndex ? "active" : ""}
                            aria-label={`Imagen ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`carousel-item${idx === 0 ? " active" : ""}`}
                        >
                            {/* eslint-disable-next-line */}
                            <img
                                src={slide.src}
                                alt={slide.alt || `Imagen ${idx + 1}`}
                                className="d-block w-100 news-img-carousel__img"
                            />
                            {slide.alt && (
                                <div className="carousel-caption news-img-carousel__caption">
                                    <p className="news-img-carousel__alt">{slide.alt}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Controles */}
                <button
                    className="carousel-control-prev news-img-carousel__control"
                    type="button"
                    data-bs-target="#newsImgCarousel"
                    data-bs-slide="prev"
                    aria-label="Anterior"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next news-img-carousel__control"
                    type="button"
                    data-bs-target="#newsImgCarousel"
                    data-bs-slide="next"
                    aria-label="Siguiente"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Contador */}
                <div className="news-img-carousel__counter">
                    {activeIndex + 1} / {slides.length}
                </div>
            </div>
        </div>
    );
}
