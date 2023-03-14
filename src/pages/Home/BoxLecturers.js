import React, { useState, useEffect, useRef } from "react";
import "../../styles/BoxLecturers.css";
import avatar1 from "../../assets/image/avatar-gv/gv_pham_xuan_hien.jpg";
import avatar2 from "../../assets/image/avatar-gv/gv_nguyen_anh_luong.jpg";
import avatar3 from "../../assets/image/avatar-gv/gv_vu_tuan_minh.jpg";
import avatar4 from "../../assets/image/avatar-gv/gv_nguyen_van_luan.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const sliderData = [
  {
    id: "01",
    service: "Giảng viên",
    name: "Phạm Xuân Hiền",
    avatar: avatar1,
    office: "- Giám đốc đào tạo BKAP",
    desc: "Tin học VP, Pascal, C, C++, PHP, SQL Server, CSDL, HTML, Cấu trúc DL&GT, PTTK hệ thống,  Java core.",
  },
  {
    id: "02",
    service: "Giảng viên",
    name: "Nguyễn Anh Lương",
    avatar: avatar2,
    office: "- Giảng viên BKAP",
    desc: "- Các môn giảng dạy C, HTML,CSS, Bootstrap, SQL PHP,MySQL,Javascript, laravel, yii2, Codeigniter",
  },
  {
    id: "03",
    service: "Giảng viên",
    name: "Vũ Tuấn Minh",
    avatar: avatar3,
    office: "- Giảng viên BKAP",
    desc: "- Giảng dạy các môn Java Core, Android, PHP, C#, ...",
  },
  {
    id: "04",
    service: "Giảng viên",
    name: "Nguyễn Văn Luận",
    avatar: avatar4,
    office: "- Giảng viên lập trình",
    desc: "- Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&CSS, JavaScript, React, ...",
  },
  {
    id: "05",
    service: "Giảng viên",
    name: "Phạm Xuân Hiền",
    avatar: avatar1,
    office: "- Giám đốc đào tạo BKAP",
    desc: "Tin học VP, Pascal, C, C++, PHP, SQL Server, CSDL, HTML, Cấu trúc DL&GT, PTTK hệ thống, Java core.",
  },
  {
    id: "06",
    service: "Giảng viên",
    name: "Nguyễn Anh Lương",
    avatar: avatar2,
    office: "- Giảng viên BKAP",
    desc: "- Các môn giảng dạy C, HTML,CSS, Bootstrap, SQL PHP,MySQL,Javascript, laravel, yii2, Codeigniter",
  },
  {
    id: "07",
    service: "Giảng viên",
    name: "Vũ Tuấn Minh",
    avatar: avatar3,
    office: "- Giảng viên BKAP",
    desc: "- Giảng dạy các môn Java Core, Android, PHP, C#, ...",
  },
  {
    id: "08",
    service: "Giảng viên",
    name: "Nguyễn Văn Luận",
    avatar: avatar4,
    office: "- Giảng viên lập trình",
    desc: "- Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&CSS, JavaScript, React, ...",
  },
];

const BoxLecturers = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [dataTeacher, SetDataTeacher] = useState([]);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    // const ulslick = document.querySelector(".slick-dots");
    // ulslick.dataset.label = "Giảng viên";
    // ulslick.setAttribute("data-label", "Giảng viên");
    axios.get("https://sdc.azurecloud.vn/api/teachers").then((res) => {
      SetDataTeacher(res.data.data);
    });
  }, []);

  console.log(dataTeacher);
  const setting = {
    slidesToShow: 6,
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
              {dataTeacher.map((data, index) => (
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

            <Slider className="preview-lecture slider-for" asNavFor={nav2} ref={slider1} slidesToShow={6} slidesToScroll={1} fade={true} speed={500} dots={true} cssEase={"linear"}>
              {dataTeacher.map((data, index) => (
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
