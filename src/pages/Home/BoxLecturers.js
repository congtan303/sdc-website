import React, { useState, useEffect, useRef } from "react";
import "../../styles/BoxLecturers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const BoxLecturers = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [dataTeacher, SetDataTeacher] = useState([]);
  // API teacher
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    axios.get("https://sdc.azurecloud.vn/api/teachers").then((res) => {
      SetDataTeacher(res.data.data);
    });
  }, []);
  let quantity = dataTeacher.length;
  if (quantity >= 7) {
    quantity = 6;
  } else if (quantity <= 6) {
    quantity = quantity - 1;
  } else if (quantity <= 3) {
    quantity = 1;
  }

  console.log(dataTeacher);
  const setting = {
    slidesToShow: quantity,
    // slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: quantity,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: quantity - 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const nameTeacher = {
    appendDots: (dots) => <ul data-label="Giảng viên">{dots}</ul>,
  };

  return (
    <section className="bkap-lecture">
      <div className="slider_container">
        <div className="container">
          <div className="bkap-lecture-title">
            <div className="title">
              <h2>
                ĐỘI NGŨ<b> GIẢNG VIÊN CHUYÊN GIA HÀNG ĐẦU</b>
              </h2>
            </div>
          </div>
          <div className="lecture-slide">
            <Slider className="slide-container slider-nav" asNavFor={nav1} ref={slider2} {...setting}>
              {dataTeacher &&
                dataTeacher.map((data, index) => (
                  <div className="slide-content" key={index}>
                    <div className="card-wrapper">
                      <div className="card-lecture">
                        <div className="image-content">
                          <div className="card-image">
                            <img src={data.avatar_urls} alt="" className="card-img" />
                          </div>
                        </div>

                        <div className="card-content">
                          <h6>{data.profession}</h6>
                          <h4>{data.fullname}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>

            <Slider className="preview-lecture slider-for" asNavFor={nav2} ref={slider1} slidesToShow={quantity} slidesToScroll={1} fade={true} speed={500} dots={true} cssEase={"linear"} {...nameTeacher}>
              {dataTeacher &&
                dataTeacher.map((data, index) => (
                  <div className="slider-for-item" key={index}>
                    <div className="lecture-item">
                      <div className="lecture-item-row1">
                        <div className="lecture-item-col-10">
                          <div className="letter-info">
                            <div className="lecture-item-row">
                              <div className="lecture-item-col-6">
                                <h4>{data.profession}</h4>
                                <h3>{data.fullname}</h3>
                                {/* <p></p> */}
                                <p>{data.skills}</p>
                                <p>{data.description}</p>
                              </div>
                              <div className="lecture-item-col-6">
                                <div className="lecture-img">
                                  <img src={data.avatar_urls} className="img-fluid lazy lazyloaded" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxLecturers;
