import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BoxTechnology.css'
import axios from 'axios';
import moment from 'moment/moment';

// const tabs = ['Tin mới nhất', 'Tin công nghệ', 'Tin về BKAP']


const BoxTechnology = () => {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [type, setType] = useState('Tin mới nhất')

    // lấy data danh mục
    useEffect(() => {
        axios.get('https://sdc.azurecloud.vn/api/categories')
            .then(response => {
                setCategories(response.data.data)
            })
    }, [])
    // lấy data bài viết
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
                    {categories && categories.map(category => (
                        <li
                            className="nav-item"
                            key={category.id}
                            onClick={() => setType(category.title)}
                        >
                            <a className={type === category.title ? "nav-link active" : "nav-link "} >{category.title}</a>
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
                                        <h3>{news && news[0]?.title}</h3>
                                        <p className="blog-item-time">{news && moment(news[0]?.created_at).format("DD/MM/YYYY")}</p>
                                        <div className="blog-item-des">
                                            <p><strong>{news && news[0]?.summary}</strong></p>
                                        </div>
                                        <div className="text-center">
                                            <Link to={`/detail-news/${news[0]?.id}`} className="read-more">Chi tiết</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-blog-8 col-md-12 no-padding">
                                <div className="row m-auto">
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-2">
                                                <img src={news && news[1]?.image_urls} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3>{news && news[1]?.title}</h3>
                                                <p className="blog-item-time">{news && moment(news[1]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[1]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <Link to={`/detail-news/${news[1]?.id}`} className="read-more">Chi tiết</Link>
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
                                                <h3>{news && news[2]?.title}</h3>
                                                <p className="blog-item-time">{news && moment(news[2]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[2]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <Link to={`/detail-news/${news[2]?.id}`} className="read-more">Chi tiết</Link>
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
                                                <h3>{news && news[3]?.title}</h3>
                                                <p className="blog-item-time">{news && moment(news[3]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>{news && news[3]?.summary}</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <Link to={`/detail-news/${news[3]?.id}`} className="read-more">Chi tiết</Link>
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
                                                <h3>{news && news[4]?.title}</h3>
                                                <p className="blog-item-time">{news && moment(news[4]?.created_at).format('DD/MM/YYYY')}</p>
                                                <div className="blog-item-des">
                                                    <p><strong>{news && news[4]?.summary}</strong></p>
                                                </div>
                                                <div className="text-center">
                                                    <Link to={`/detail-news/${news[4]?.id}`} className="read-more">Chi tiết</Link>
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
                    <Link to='/xem-them' className="load-more but-primary but-lg">Xem thêm</Link>
                </div>
            </div>
        </section>

    )
}

export default BoxTechnology
