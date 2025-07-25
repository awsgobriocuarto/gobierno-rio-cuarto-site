"use client";
import Carousel from "react-bootstrap/Carousel";

export default function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/images/14.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/12.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/plaza.jpg" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
