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
          <img src="/images/14.jpg" alt="" className="hero-slide-image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* eslint-disable-next-line */}
          <img src="/images/12.jpg" alt="" className="hero-slide-image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* eslint-disable-next-line */}
          <img src="/images/plaza.jpg" alt="" className="hero-slide-image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
