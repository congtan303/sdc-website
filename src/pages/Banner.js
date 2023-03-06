import React from "react";
import "../styles/Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../src/assets/image/banner/banner1.jpg";
import banner2 from "../../src/assets/image/banner/banner2.jpg";
import banner3 from "../../src/assets/image/banner/banner3.jpg";
const Banner = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} interval={500}>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
    </Carousel>
  );
};

export default Banner;
