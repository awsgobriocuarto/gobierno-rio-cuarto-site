"use client";
import Carousel from "react-bootstrap/Carousel";

const HERO_ICONS = [
  { name: "circles", color: "white", size: "28" },
  { name: "squares", color: "white", size: "28" },
  { name: "waves", color: "white", size: "28" },
];

export default function Slides() {
  return (
    <div className="hero-slides-wrapper">
      {/* overlay MOVIDO a Hero.jsx para que NO herede la opacidad de .hero-slides */}
      <Carousel controls={false} fade={true} indicators={false}>
        <Carousel.Item>
          {/* eslint-disable-next-line */}
          <img
            src="/images/gente1.jpg"
            alt="Vecinos en el parque"
            className="hero-slide-image"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* eslint-disable-next-line */}
          <img
            src="/images/gente2.jpg"
            alt="Familia riocuartense"
            className="hero-slide-image"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* eslint-disable-next-line */}
          <img
            src="/images/gente3.jpg"
            alt="Vecinos mayores"
            className="hero-slide-image"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
