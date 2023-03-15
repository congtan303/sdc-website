import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../../styles/ReadMorePage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = ['Tin mới nhất', 'Tin hot', 'Tin nhiều người đọc']
const ReadMore = () => {
    const [news, setNews] = useState([])
    const [type, setType] = useState('Tin mới nhất')
    useEffect(() => {
        axios.get('https://sdc.azurecloud.vn/api/news')
            .then(response => {
                setNews(response.data.data.data)
            })
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: '25px' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: '25px', zIndex: 1 }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        <div>
            <Header />
            <section className='banner-read-more'>
                <div className='banner-item'>
                    <div className='banner-item-caption'>
                        <div className='container'>
                            <div className='content-banner'>
                                <h4 className='text-white'>Học lập trình giỏi chưa đủ</h4>
                                <h3>
                                    <span>hãy </span>
                                    <span className='text-underline'>đọc nhiều hơn</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='content-tech-blog'>
                <div className='container'>
                    <ul className='box-breadcrumbs'>
                        <li className='item-breadcrumb'>
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        <li className='item-breadcrumb'>
                            <span>Blog công nghệ</span>
                        </li>
                    </ul>
                </div>
                <div className='box-content-blog tech-blog'>
                    <div className='container'>
                        <div className='header-content'>
                            <h5 className='title-content m-0'>TIN CÔNG NGHỆ</h5>
                            <p className='descript-title'>Cùng Bachkhoa-Aptech đón đầu công nghệ - mở lối tương lai</p>
                        </div>
                        <div className='group-content-blog'>
                            <ul className='nav nav-pills mb-3 mt-3 mx-auto' id='pills-tab'>
                                {tabs && tabs.map(tab => (
                                    <li
                                        className="nav-item"
                                        key={tab}
                                        onClick={() => setType(tab)}
                                    >
                                        <a className={type === tab ? "nav-link active" : "nav-link "} >{tab}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className='tab-content'>
                                <Slider {...settings} >
                                    {news && news.map(item => (
                                        <div className='item' key={item.id}  >
                                            <div className='row'>
                                                <div className='col-md-6 col-xs-12 p-0'>
                                                    <div className='bg-image-blog'>
                                                        <img src={item.image_urls} />
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-xs-12'>
                                                    <div className='small-content-blog d-flex flex-column'>
                                                    <div className='content-small flex-auto'>
                                                        <span className='date-blog'>
                                                            <i className='fa fa-calendar-alt'></i>
                                                            06/03/2023
                                                        </span>
                                                        <h4>Chúc mừng bảo vệ đồ án thành công</h4>
                                                        <div className='sub__title'>
                                                            <p>
                                                                <strong>{item.summary}</strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='read-more-blog'>
                                                        <a href='/'>
                                                            <span>Hay không?</span>
                                                            <p>
                                                                Đọc thêm này
                                                                <i className='fa fa-angle-right'></i>
                                                            </p>
                                                        </a>
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
                </div>
                <div className='box-content-blog-detail bg-section'>
                    <div className='container'>
                        <div className='box-more-blog'>
                            <div className='row'>
                                {news && news.map(item => (
                                    <div className='col-lg-4 col-md-6  mb-5' key={item.id}>
                                        <div className='item box-shadow-item'>
                                            <div className='row flex-column h-100'>
                                                <div className='col-md-12 col-xs-12 img-log'>
                                                    <img src={item.image_urls} style={{ width: '100%' }} />
                                                </div>
                                                <div className='col-md-12 col-xs-12 '>
                                                    <div className='small-content-blog d-flex flex-column'>
                                                        <div className='content-small flex-auto'>
                                                            <span className='date-blog'>13-03-2023</span>
                                                            <h4 className='my-3'>{item.title}</h4>
                                                            <div className='des__sapo'>
                                                                <p>
                                                                    <strong>{item.summary}</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='read-more-blog'>
                                                        <a href='/'>
                                                            <span>Hay không?</span>
                                                            <p>
                                                                Đọc thêm này
                                                                <i className='fa fa-angle-right'></i>
                                                            </p>
                                                        </a>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ReadMore