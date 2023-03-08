import React from 'react'
import '../styles/BoxProducts.css'
import imageProduct1 from '../assets/image/product/product1.jpg'
import imageProduct2 from '../assets/image/product/product2.jpg'
import imageProduct3 from '../assets/image/product/product3.jpg'
import imageProduct4 from '../assets/image/product/product4.jpg'
import imageProduct5 from '../assets/image/product/product5.png'
import imageProduct6 from '../assets/image/product/product6.jpg'
const Products = () => {
    const products = [
        {
            id: 1,
            image: imageProduct1,
            caption: 'Website kiểm tra năng lực online',
            student: 'Xuân Long, Minh Đức'
        },
        {
            id: 2,
            image: imageProduct2,
            caption: 'Website quản lý showroom ô tô',
            student: 'Quốc Đạt, Như Nhất, Anh Tú'
        },
        {
            id: 3,
            image: imageProduct3,
            caption: 'Website Online Art Gallery',
            student: 'BKAPers'
        },
        {
            id: 4,
            image: imageProduct4,
            caption: 'WEBSITE ĐỒ ĐIỆN TỬ',
            student: 'Hoàng Hùng, Doãn Việt và Bá Kiên'
        },
        {
            id: 5,
            image: imageProduct5,
            caption: 'VÔ ĐỊCH TECHWIZ 2.0',
            student: 'BK DW 04'
        },
        {
            id: 6,
            image: imageProduct6,
            caption: 'WEBSITE BÁN RAU CỦ SẠCH',
            student: 'BKAP-ers'
        },
    ]
    return (
        <section className="product">
            <div className="container">
                <div className="section__title-product">
                    <div className="title row justify-content-start text-violet">
                        <div className="col-md-3">
                            <h2><span>SẢN PHẨM</span>HỌC VIÊN</h2>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="title-caps">
                                <p>Sản phẩm thực chiến của sinh viên khi tham gia các khóa học tại Bách Khoa - Aptech</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__content-product">
                    <div className="row">
                        {products && products.map(product => (
                            <div className="col-md-6 col-lg-4 " key={product.id}>
                                <div className="st-product-item">
                                    <img src={product.image} className="img-fluid lazy" alt="" />
                                    <div className="st-product-item-overlay">
                                        <span className="js-video-button" data-video-id="bbjLCHI82bY"></span>
                                    </div>
                                    <div className="st-product-item-caps">
                                        <h3>
                                            <a href="">{product.caption}</a>
                                        </h3>
                                        <p>{product.student}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div>
                        <a href="#" className="link-read-more">Xem thêm <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products