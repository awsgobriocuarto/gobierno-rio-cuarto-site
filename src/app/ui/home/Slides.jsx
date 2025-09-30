"use client";
import Carousel from "react-bootstrap/Carousel";

export default function Slides() {
  return (
    <Carousel controls={false} fade={true} indicators={false}>
      <Carousel.Item>
        {/* eslint-disable-next-line */}
        <img src="/images/14.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* eslint-disable-next-line */}
        <img src="/images/12.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* eslint-disable-next-line */}
        <img src="/images/plaza.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
