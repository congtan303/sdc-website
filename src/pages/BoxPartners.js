import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/BoxPartners.css'
import imageCMC from '../assets/image/partner/cmc.png'
import imageCocCoc from '../assets/image/partner/coc-coc.png'
import imageFSI from '../assets/image/partner/FSI.png'
import imagegGameloft from '../assets/image/partner/gameloft.png'
import imageHostvn from '../assets/image/partner/hostvn.png'
import imageMisa from '../assets/image/partner/misa.png'
import imageNhanhoa from '../assets/image/partner/nhan-hoa.png'
import imageNova from '../assets/image/partner/nova.png'
import imageOminext from '../assets/image/partner/ominext.png'
import imageSotateck from '../assets/image/partner/sotateck.png'
import imageTelsoft from '../assets/image/partner/tel-soft.png'
import imageThienHoang from '../assets/image/partner/thien-hoang.png'
import imageViettel from '../assets/image/partner/viettel.png'
import imageVnpGroup from '../assets/image/partner/vnp-group.png'
import imageVnpt from '../assets/image/partner/vnpt.png'
const BoxPartners = () => {
    const partners = [
        {
            id: 1,
            image: imageCMC
        },
        {
            id: 2,
            image: imageCocCoc
        },
        {
            id: 3,
            image: imageFSI
        },
        {
            id: 4,
            image: imagegGameloft
        },
        {
            id: 5,
            image: imageHostvn
        },
        {
            id: 6,
            image: imageMisa
        },
        {
            id: 7,
            image: imageNhanhoa
        },
        {
            id: 8,
            image: imageNova
        },
        {
            id: 9,
            image: imageOminext
        },
        {
            id: 10,
            image: imageSotateck
        },
        {
            id: 11,
            image: imageTelsoft
        },
        {
            id: 12,
            image: imageThienHoang
        },
        {
            id: 13,
            image: imageViettel
        },
        {
            id: 14,
            image: imageVnpGroup
        },
        {
            id: 15,
            image: imageVnpt
        }
    ]
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
                    initialSlide: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };
    return (
        <section className="partner">
            <div className="container">
                <div className="partner-title">
                    <div className="title text-violet text-center">
                        <h2>MẠNG LƯỚI <b>ĐỐI TÁC TUYỂN DỤNG</b></h2>
                    </div>
                </div>
                <div className="partner-content">
                   
                    <Slider {...settings} >
                        {partners && partners.map(partner => (
                            <div key={partner.id} >
                                <div className="slide">
                                    <img src={partner.image} alt=""  />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default BoxPartners