import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BoxTechnology.css'
import axios from 'axios';
import moment from 'moment/moment';

const tabs = ['Tin mới nhất', 'Tin công nghệ', 'Tin về BKAP']

const BoxTechnology = () => {
    const navigate = useNavigate()
    const [news, setNews] = useState([])
    const [type, setType] = useState('Tin mới nhất')

    const handleNavigate = () => {
        navigate(`/detail-news/${news[0]?.id}`)
    }
    const handleNavigate1 = () => {
        navigate(`/detail-news/${news[1]?.id}`)
    }
    const handleNavigate2 = () => {
        navigate(`/detail-news/${news[2]?.id}`)
    }
    const handleNavigate3 = () => {
        navigate(`/detail-news/${news[3]?.id}`)
    }
    const handleNavigate4 = () => {
        navigate(`/detail-news/${news[4]?.id}`)
    }

    useEffect(() => {
        axios.get('https://sdc.azurecloud.vn/api/news')
            .then(response => {
                setNews(response.data.data.data)
            })
    }, [])
  
  
    return (
        <section className="blog-technology">
            <div className="container">
                <div className="section__blog-title">
                    <div className="title text-violet">
                        <h2>
                            <span>BLOG CÔNG NGHỆ</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="section__blog-content">
                <ul className="nav nav-blogs" id="pills-tab" role="tablist">
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
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
                        <div className="row m-auto">
                            <div className="col-blog-4 col-md-12 no-padding">
                                <div className="blog-item active">
                                    <div className="blog-item-img page-1">
                                        <img src={news && news[0]?.image_urls} alt='' />
                                    </div>

                                    <div className="blog-item-title">
                                        <h3><a href="#">{news && news[0]?.title}</a></h3>
                                        <p className="blog-item-time">{news && moment(news[0]?.created_at).format("DD/MM/YYYY") }</p>
                                        <div className="blog-item-des">
                                            <p><strong>{news && news[0]?.summary}</strong></p>
                                        </div>
                                        <div className="text-center" onClick={handleNavigate}>
                                            <a href="" className="read-more">Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-blog-8 col-md-12 no-padding">
                                <div className="row no-margin">
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-2">
                                                <img src={news && news[1]?.image_urls} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="#">{news && news[1]?.title}</a></h3>
                                                <p className="blog-item-time">{news && moment(news[1]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[1]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center" onClick={handleNavigate1}>
                                                    <a href="#" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-3">
                                                <img src={news && news[2]?.image_urls} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="">{news && news[2]?.title}</a></h3>
                                                <p className="blog-item-time">{news && moment(news[2]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[2]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center" onClick={handleNavigate2}>
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-4">
                                                <img src={news && news[3]?.image_urls} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="">{news && news[3]?.title}</a></h3>
                                                <p className="blog-item-time">{news && moment(news[3]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[3]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center" onClick={handleNavigate3}>
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-5">
                                                <img src={news && news[4]?.image_urls} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="">{news && news[4]?.title}</a></h3>
                                                <p className="blog-item-time">{news && moment(news[4]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p><strong>{news && news[4]?.summary}</strong></p>
                                                </div>
                                                <div className="text-center" onClick={handleNavigate4}>
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <a href="#" className="load-more but-primary but-lg">Xem thêm</a>
                </div>
            </div>
        </section>
        
    )
}

export default BoxTechnology
