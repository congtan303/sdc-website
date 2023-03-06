import React from 'react'
import '../styles/BoxNews.css'
import imageActive from '../assets/image/news/báo.jpeg'
import imageNews1 from '../assets/image/news/BK-DW-04.jpg'
import imageNews2 from '../assets/image/news/image-news-2.jpg'
import imageNews3 from '../assets/image/news/image-news-2.jpg'


const BoxNews = () => {
    const news = [
        {
            id: 1,
            image: imageNews1,
            description: '[Theo Dân Trí] Gen Z - thế hệ hội tụ tố chất để bù...',
            source: 'Dân Trí',
            date: '00:00 07-06-2021'
        },
        {
            id: 2,
            image: imageNews2,
            description: '[Theo Kênh 14] Công nghệ thông tin - Bệ phóng 4.0...',
            source: 'Kênh 14',
            date: '00:00 12-05-2021'
        },
        {
            id: 3,
            image: imageNews3,
            description: 'Nhân rộng mô hình đào tạo công nghệ thông tin "làm...',
            source: 'Giáo dục và thời đại',
            date: '00:00 12-03-2021'
        },
    ]
    return (
        <section className="news bg-overlay pb-148">
            <div className="container">
                <div className="news-title">
                    <div className="title text-white text-center">
                        <h2>BÁO CHÍ <b>NÓI VỀ CHÚNG TÔI</b></h2>
                    </div>
                </div>
                <div className="news-content pb-80">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-feature row">
                                <div className="col-lg-9">
                                    <div className="news-item-active">
                                        <div className="new__img-thumb">
                                            <img src={imageActive} alt="" className="w-100" />
                                            <div className="st-product-item-overlay">
                                                <span className="js-video-button" data-video-id="sypNKq9LAQk"></span>
                                            </div>
                                        </div>
                                        <div className="new-caps">
                                            <h3>
                                                <a href="#">[Dân trí]_SDC bệ phóng công nghệ cho GenDev</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 no-padding">
                            {news && news.map(item => (
                                <div className="news-item" key={item.id}>
                                    <div className="d-flex align-items-center">
                                        <div className="col-md-4 no-padding">
                                            <div className="news-item-img">
                                                <img src={item.image} alt="" />
                                                <div className="st-product-item-overlay">
                                                    <span className="js-video-button" data-video-id="T5_u8TQWp5Y"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <h3>
                                                <a href="#">{item.description}</a>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <span>{item.source}</span>
                                                <span>{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                            <div className="text-right">
                                <a href="#" className="but-warning but-normal">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxNews