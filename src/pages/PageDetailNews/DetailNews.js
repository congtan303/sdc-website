import React, { useEffect, useState } from 'react'
import '../../styles/DetailNews.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import moment from 'moment/moment';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Hotline from '../Hotline';
const DetailNews = () => {
    let location = useLocation();
    let { id } = useParams()
    const [detailNews, setDetailNews] = useState({})
    // call API detailNews
    useEffect(() => {
        axios.get(`https://sdc.azurecloud.vn/api/news/detail/${id}`)
            .then(response => {
                setDetailNews(response.data.data)
            })
    }, [location])

    // call API list-news
    const [listNews, setListNews] = useState([])
    useEffect(() => {
        axios.get('https://sdc.azurecloud.vn/api/news/')
            .then(response => {
                setListNews(response.data.data.data)
                console.log(response.data.data.data)
            })
    }, [])

    // call API features news
    const [featuresNews, setFeaturesNews] = useState([])
    useEffect(() => {
        axios.get('https://sdc.azurecloud.vn/api/news?feature=1')
            .then(response => {
                setFeaturesNews(response.data.data.data);

            })
    }, [])


    return (
        <main>
            <Header />
            <div className='breadcrumb-wrap'>
                <div className='container'>
                    <ul className='breadcrumb'>
                        <li className='breadcrumb-item'>
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        <li className='breadcrumb-item'>
                            <Link to='/'>Tin tức</Link>
                        </li>
                        <li className='breadcrumb-item active'>Bài viết</li>
                    </ul>
                </div>
            </div>
            <section className='section-details'>
                <div className='section-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='details-post'>
                                    <h2 className='details-post-title'>{detailNews && detailNews?.title}</h2>
                                    <div className='details-post-time'>
                                        <span>
                                            <i className="far fa-clock"></i>
                                            {detailNews && moment(detailNews?.created_at).format('DD/MM/YYYY')}
                                        </span>
                                        <span>
                                            <i className="fas fa-user-circle"></i>
                                            {detailNews && detailNews?.users?.name}
                                        </span>
                                    </div>
                                    <hr />
                                    <div className='details-post-description'>
                                        <p className='page_speed_248973596'>
                                            <strong>{detailNews && detailNews?.summary}</strong>
                                        </p>
                                    </div>
                                    <div className='details-post-content'>
                                        <p>
                                            <img src={detailNews && detailNews?.image_urls} alt='...' style={{ width: '100%', height: '100%' }} />
                                        </p>
                                        
                                        <p dangerouslySetInnerHTML={{__html:detailNews?.content}}></p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='details-post-social'></div>
                                    <div className='details-post-comment-fb'></div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='sidebar'>
                                    <div className='widget'>
                                        <div className='widget-title'>
                                            <h3>Tin mới</h3>
                                        </div>
                                        <div className='widget-content'>
                                            <ul>
                                                {listNews && listNews.map((item, index) => (
                                                    <Link to={`/${item.slug}/${item.id}`} key={index} >
                                                        <li className='item-post-sidebar' >
                                                            <div className='row' >
                                                                <div className='col-5' >

                                                                    <img src={item.image_urls} />

                                                                </div>
                                                                <div className='col-7' >
                                                                    <h3>
                                                                        {item.title}
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </Link>

                                                ))}


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='sidebar'>
                                    <div className='widget'>
                                        <div className='widget-title'>
                                            <h3>Tin nổi bật</h3>
                                        </div>
                                        <div className='widget-content'>
                                            <ul>
                                                {featuresNews && featuresNews.map((item, index) => (
                                                    <Link to={`/${item.slug}/${item.id}`} key={index} >
                                                        <li className='item-post-sidebar' >
                                                            <div className='row'>
                                                                <div className='col-5'>
                                                                    <a>
                                                                        <img src={item.image_urls} />
                                                                    </a>
                                                                </div>
                                                                <div className='col-7'>
                                                                    <h3>
                                                                        <a>{item.title}</a>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </Link>
                                                ))}


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Hotline />
            <Footer />
        </main>
    )
}

export default DetailNews