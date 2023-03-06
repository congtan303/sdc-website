import React from 'react'
import '../styles/BoxCommunity.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../assets/image/student-hot/student-hot-1.png'
import avatar2 from '../assets/image/student-hot/student-hot-2.png'
import avatar3 from '../assets/image/student-hot/student-hot-3.png'
import avatar4 from '../assets/image/student-hot/student-hot-4.png'

const BoxCommunity = () => {
    const students = [
        {
            id: 1,
            avatar: avatar1,
            name: 'Bùi Ngọc Sơn',
            position: 'Giám đốc kỹ thuật Công ty CP Vật Giá Việt Nam'
        },
        {
            id: 2,
            avatar: avatar2,
            name: 'Bạch Ngọc Toàn',
            position: 'CEO Tedu - Học lập trình qua dự án'
        },
        {
            id: 3,
            avatar: avatar3,
            name: 'Vương Duy Nam',
            position: 'CEO & Founder Công ty HOSTVN'
        },
        {
            id: 4,
            avatar: avatar4,
            name: 'Bùi Ngọc Sơn',
            position: 'Trưởng phòng IT Xa lộ thông tin'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };
    return (
        <section className="student">
            <div className="container">
                <div className="section__student-title">
                    <div className="title text-violet text-center">
                        <h2>Cộng đồng<span>35.000 Sinh viên thành đạt</span></h2>
                    </div>
                </div>
                <div className="student-content">
                    <Slider {...settings}>
                        {students && students.map(student => (
                            <div key={student.id}>
                                <div className="comm-item">
                                    <div className="comm-item-img">
                                        <img src={student.avatar} className="img-fluid lazy" alt="" />
                                    </div>
                                    <h3>{student.name}</h3>
                                    <p>{student.position}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <span className='btn-slider'>
                            <i className="fa-solid fa-circle"></i>
                        </span>
                </div>
            </div>
        </section>
    )
}

export default BoxCommunity