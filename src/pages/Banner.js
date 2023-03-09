
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    axios.get('https://sdc.azurecloud.vn/api/banners')
          .then((response) => {
            setBanners(response.data.data)
            console.log(response.data.data);
          })
  }, [])
 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: '25px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  left: '25px', zIndex: 1 }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <section className='section-banner'>
      
      <Slider {...settings} style={{width: '100%', height: '100%'}}>
        {banners.map((banner, index) => (
          <div key={index} className='test' style={{height: '100%'}}>
            <img src={banner.link_urls} alt='hinh anh' style={{width: '100%',height: '100%', objectFit: 'contain'}} />
          </div>
        ))}

      </Slider>
    </section>

  )
}




export default Banner;
