import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/BoxPartners.css";
import axios from "axios";

const BoxPartners = () => {
  // API Partners
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/partners").then((response) => {
      setPartners(response.data.data);
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="partner">
      <div className="container">
        <div className="partner-title">
          <div className="title text-violet text-center">
            <h2>
              MẠNG LƯỚI <b>ĐỐI TÁC TUYỂN DỤNG</b>
            </h2>
          </div>
        </div>
        <div className="partner-content">
          <Slider {...settings}>
            {partners &&
              partners.map((partner, index) => (
                <div key={index}>
                  <div className="slide">
                    <img src={partner.image_url} alt="" />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BoxPartners;
