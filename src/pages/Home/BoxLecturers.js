import React, { useState, useEffect, useRef } from "react";
import "../../styles/BoxBoxLecturers.css";
import avatar1 from "../../assets/image/avatar-gv/gv_pham_xuan_hien.jpg";
import avatar2 from "../../assets/image/avatar-gv/gv_nguyen_anh_luong.jpg";
import avatar3 from "../../assets/image/avatar-gv/gv_vu_tuan_minh.jpg";
import avatar4 from "../../assets/image/avatar-gv/gv_nguyen_van_luan.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderData = [
  {
    id: "01",
    service: "Giảng viên",
    name: "Phạm Xuân Hiền",
    avatar: avatar1,
    office: "- Giám đốc đào tạo BKAP",
    desc: "Tin học VP, Pascal, C, C++, PHP, SQL Server, CSDL, HTML, Cấu trúc DL&amp;GT, PTTK hệ thống,&nbsp; Java core.",
  },
  {
    id: "02",
    service: "Giảng viên",
    name: "Nguyễn An Lương",
    avatar: avatar2,
    office: "- Giảng viên BKAP",
    desc: "- Các môn giảng dạy&nbsp;C, HTML,CSS, Bootstrap, SQL PHP,MySQL,Javascript, laravel, yii2, Codeigniter",
  },
  {
    id: "03",
    service: "Giảng viên",
    name: "Vũ Tuấn Minh",
    avatar: avatar3,
    office: "-Giảng viên BKAP",
    desc: "- Giảng dạy các môn&nbsp; Java Core, Android, PHP, C#, ...",
  },
  {
    id: "04",
    service: "Giảng viên",
    name: "Nguyễn Văn Luận",
    avatar: avatar4,
    office: "- Giảng viên lập trình",
    desc: "- Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&amp;CSS, JavaScript, React, ...",
  },
  {
    id: "05",
    service: "Giảng viên",
    name: "Phạm Xuân Hiền",
    avatar: avatar1,
    office: "- Giám đốc đào tạo BKAP",
    desc: "Tin học VP, Pascal, C, C++, PHP, SQL Server, CSDL, HTML, Cấu trúc DL&amp;GT, PTTK hệ thống,&nbsp; Java core.",
  },
  {
    id: "06",
    service: "Giảng viên",
    name: "Nguyễn An Lương",
    avatar: avatar2,
    office: "- Giảng viên BKAP",
    desc: "- Các môn giảng dạy&nbsp;C, HTML,CSS, Bootstrap, SQL PHP,MySQL,Javascript, laravel, yii2, Codeigniter",
  },
  {
    id: "07",
    service: "Giảng viên",
    name: "Vũ Tuấn Minh",
    avatar: avatar3,
    office: "-Giảng viên BKAP",
    desc: "- Giảng dạy các môn&nbsp; Java Core, Android, PHP, C#, ...",
  },
  {
    id: "08",
    service: "Giảng viên",
    name: "Nguyễn Văn Luận",
    avatar: avatar4,
    office: "- Giảng viên lập trình",
    desc: "- Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&amp;CSS, JavaScript, React, ...",
  },
];

const BoxLecturers = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);

    const ulslick = document.querySelector(".slick-dots");
    console.log(ulslick);
    ulslick.setAttribute("data-label", "Giảng viên");
  }, []);

  const setting = {
    slidesToShow: 6,
    // slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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

  return (
    <div>
      <section class="bkap-lecture">
        <div class="slider_container">
          <div class="container">
            <div class="bkap-lecture-title">
              <div class="title">
                <h2>
                  ĐỘI NGŨ<b> GIẢNG VIÊN CHUYÊN GIA HÀNG ĐẦU</b>
                </h2>
              </div>
            </div>
            <div class="lecture-slide">
              <Slider class="slide-container slider-nav" asNavFor={nav1} ref={slider2} {...setting}>
                {sliderData.map((data, index) => (
                  <div class="slide-content" key={index}>
                    <div class="card-wrapper">
                      <div class="card-lecture">
                        <div class="image-content">
                          <div class="card-image">
                            <img src={data.avatar} alt="" class="card-img" />
                          </div>
                        </div>

                        <div class="card-content">
                          <h6>{data.service}</h6>
                          <h4>{data.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <Slider class="preview-lecture slider-for" asNavFor={nav2} ref={slider1} slidesToShow={6} slidesToScroll={1} fade={true} speed={500} dots={true} cssEase={"linear"}>
                {sliderData.map((data, index) => (
                  <div class="slider-for-item" key={index}>
                    <div class="lecture-item">
                      <div class="lecture-item-row1">
                        <div class="lecture-item-col-10">
                          <div class="letter-info">
                            <div class="lecture-item-row">
                              <div class="lecture-item-col-6">
                                <h4>{data.service}</h4>
                                <h3>{data.name}</h3>
                                <p></p>
                                <p>{data.office}</p>
                                <p>{data.desc}</p>
                              </div>
                              <div class="lecture-item-col-6">
                                <div class="lecture-img">
                                  <img src={data.avatar} class="img-fluid lazy lazyloaded" alt="" />
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
    </div>
  );
};

export default BoxLecturers;
