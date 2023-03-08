import React, { useEffect } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/BoxTechnology.css'
import imgTech1 from '../assets/image/technology/image-technology-1.jpg'
import imgTech2 from '../assets/image/technology/image-technology-2.jpg'
import imgTech3 from '../assets/image/technology/image-technology-3.jpg'
import imgTech4 from '../assets/image/technology/image-technology-4.jpg'
import imgTech5 from '../assets/image/technology/image-technology-5.jpg'

const tabs = ['Tin mới nhất', 'Tin công nghệ', 'Tin về BKAP']
const BoxTechnology = () => {
    const dataLatest = {
        imgActive: 'https://product.bachkhoa-aptech.edu.vn:33/Resources/Data/IMG_6391.jpg',
        titleActive:'CHÚC MỪNG C2002M VÀ S2010I BẢO VỆ ĐỒ ÁN THÀNH CÔNG',
        dateActive: '06-03-2023',
        descriptionActive: 'Sáng 4/3 vừa qua, các bạn lớp S2010I VÀ C2002M đã có buổi bảo vệ đồ án SEM 4, trình làng các sản phẩm độc đáo bằng ngôn ngữ Android.',
        imgCol1: 'https://product.bachkhoa-aptech.edu.vn:33/Resource…149782195941_01d2ad86f9d300baa2bb7522c77f5379.jpg',
        titleCol1: 'THÔNG BÁO LỊCH KHAI GIẢNG KHÓA HỌC',
        dateCol1: '02-03-2023',
        descriptionCol1: 'Note ngay lịch khai giảng các khóa học lập trình và quản trị mạng siêu hot sẽ khai giảng tháng 3 này tại Bachkhoa-Aptech nhé!',
        imgCol2: 'https://product.bachkhoa-aptech.edu.vn:33/Resource…149782195941_01d2ad86f9d300baa2bb7522c77f5379.jpg',
        titleCol2: 'THÔNG BÁO LỊCH KHAI GIẢNG KHÓA HỌC',
        dateCol2: '02-03-2023',
        descriptionCol2: 'Note ngay lịch khai giảng các khóa học lập trình và quản trị mạng siêu hot sẽ khai giảng tháng 3 này tại Bachkhoa-Aptech nhé!',
        imgCol3: 'https://product.bachkhoa-aptech.edu.vn:33/Resource…149782195941_01d2ad86f9d300baa2bb7522c77f5379.jpg',
        titleCol3: 'THÔNG BÁO LỊCH KHAI GIẢNG KHÓA HỌC',
        dateCol3: '02-03-2023',
        descriptionCol3: 'Note ngay lịch khai giảng các khóa học lập trình và quản trị mạng siêu hot sẽ khai giảng tháng 3 này tại Bachkhoa-Aptech nhé!',
        imgCol4: 'https://product.bachkhoa-aptech.edu.vn:33/Resource…149782195941_01d2ad86f9d300baa2bb7522c77f5379.jpg',
        titleCol4: 'THÔNG BÁO LỊCH KHAI GIẢNG KHÓA HỌC',
        dateCol4: '02-03-2023',
        descriptionCol4: 'Note ngay lịch khai giảng các khóa học lập trình và quản trị mạng siêu hot sẽ khai giảng tháng 3 này tại Bachkhoa-Aptech nhé!',
    }
    const dataTechnology = {
        
    }
    const dataBKAP = {
        
    }
    const [newsLatest, setNewsLatest] = useState({}) 
    const [type, setType] = useState('Tin mới nhất')

    // useEffect(() => {

    // }, [type])

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
                   
                    {/* <li className="nav-item">
                        <a className="nav-link active" id="new-tab" data-toggle="tab" href="#new" role="tab" aria-controls="new" aria-selected="true">Tin mới nhất</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="tech-tab" data-toggle="tab" href="#tech" role="tab" aria-controls="tech" aria-selected="false">Tin công nghệ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="bkap-tab" data-toggle="tab" href="#bkap" role="tab" aria-controls="bkap" aria-selected="false">Tin về BKAP</a>
                    </li> */}

                </ul>
                {/* <Nav variant='pills' defaultActiveKey={'link-3'} as='ul'>
                        <Nav.Item as='li' className="nav-item">
                            <Nav.Link eventKey='link-3' className="nav-link">Tin mới nhất</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li' className="nav-item">
                            <Nav.Link eventKey='link-1' className="nav-link">Tin công nghệ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li' className="nav-item">
                            <Nav.Link eventKey='link-2' className="nav-link">Tin về BKAP</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
                        <div className="row m-auto">
                            <div className="col-blog-4 col-md-12 no-padding">
                                <div className="blog-item active">
                                    <div className="blog-item-img page-1">
                                        <img src={imgTech1} alt='' />
                                    </div>

                                    <div className="blog-item-title">
                                        <h3><a href="#">THÔNG BÁO TUYỂN SINH 2023: CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ</a></h3>
                                        <p className="blog-item-time">13-02-2023</p>
                                        <div className="blog-item-des">
                                            <p><strong>CƠ HỘI TUYỂN THẲNG VÀ NHẬN HỌC BỔNG BỆ PHÓNG TÀI NĂNG LÊN TỚI 50% HỌC PHÍ DÀNH CHO 2K5.</strong></p>
                                        </div>
                                        <div className="text-center">
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
                                                <img src={imgTech2} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="#">HOT: LỊCH KHAI GIẢNG KHÓA HỌC LẬP TRÌNH JAVA FULLSTACK PLUS THÁNG 2</a></h3>
                                                <p className="blog-item-time">07-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Chào Quý Mão bùng nổ cơn bão Code, tháng 2 này SDC khai giảng lớp Java Fullstack Plus và tặng khóa lập trình C miễn phí.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="#" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-3">
                                                <img src={imgTech3} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="">BKAPER KHOE SẢN PHẨM CÔNG NGHỆ .NET VỚI MÔ HÌNH LÀM TRƯỚC HỌC SAU</a></h3>
                                                <p className="blog-item-time">06-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Sáng 4/2 vừa qua, các bạn lớp C2010I, C2010G1, C2010G2 đã có buổi bảo vệ đồ án SEM 3, trình làng các sản phẩm độc đáo bằng ngôn ngữ .NET.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-4">
                                                <img src={imgTech4} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href="">SINH VIÊN SDC RỘN RÀNG NHẬN LÌ XÌ KHAI XUÂN </a></h3>
                                                <p className="blog-item-time">01-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong
                                                        >Khép lại kỳ nghỉ Tết Nguyên Đán ấm cúng,&nbsp;SDC lại rộn ràng chào đón các bạn học viên tới trường trong những ngày học tập đầu tiên của năm mới Quý Mão
                                                            2023.</strong
                                                        >
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-5">
                                            <img src={imgTech5} alt='' />
                                            </div>
                                            <div className="blog-item-title">
                                                <h3><a href=""> SDC THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2023 </a></h3>
                                                <p className="blog-item-time">12-01-2023</p>
                                                <div className="blog-item-des">
                                                    <p><strong>SDC trân trọng thông báo thời gian nghỉ Tết Nguyên Đán 2023 tới học viên và quý phụ huynh.</strong></p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="tech" role="tabpanel" aria-labelledby="tech-tab">
                        <div className="row m-auto">
                            <div className="col-blog-4 col-md-12 no-padding">
                                <div className="blog-item active">
                                    <div className="blog-item-img page-1"></div>
                                    <div className="blog-item-title">
                                        <h3><a href="#">THÔNG BÁO TUYỂN SINH 2025: CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ</a></h3>
                                        <p className="blog-item-time">13-02-2023</p>
                                        <div className="blog-item-des">
                                            <p><strong>CƠ HỘI TUYỂN THẲNG VÀ NHẬN HỌC BỔNG BỆ PHÓNG TÀI NĂNG LÊN TỚI 50% HỌC PHÍ DÀNH CHO 2K5.</strong></p>
                                        </div>
                                        <div className="text-center">
                                            <a href="" className="read-more">Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-blog-8 col-md-12 no-padding">
                                <div className="row no-margin">
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-2"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="#">HOT: LỊCH KHAI GIẢNG KHÓA HỌC LẬP TRÌNH JAVA FULLSTACK PLUS THÁNG 2</a></h3>
                                                <p className="blog-item-time">07-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Chào Quý Mão bùng nổ cơn bão Code, tháng 2 này SDC khai giảng lớp Java Fullstack Plus và tặng khóa lập trình C miễn phí.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="#" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-3"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="">BKAPER KHOE SẢN PHẨM CÔNG NGHỆ .NET VỚI MÔ HÌNH LÀM TRƯỚC HỌC SAU</a></h3>
                                                <p className="blog-item-time">06-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Sáng 4/2 vừa qua, các bạn lớp C2010I, C2010G1, C2010G2 đã có buổi bảo vệ đồ án SEM 3, trình làng các sản phẩm độc đáo bằng ngôn ngữ .NET.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-4"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="">SINH VIÊN SDC RỘN RÀNG NHẬN LÌ XÌ KHAI XUÂN </a></h3>
                                                <p className="blog-item-time">01-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong
                                                        >Khép lại kỳ nghỉ Tết Nguyên Đán ấm cúng,&nbsp;SDC lại rộn ràng chào đón các bạn học viên tới trường trong những ngày học tập đầu tiên của năm mới Quý Mão
                                                            2023.</strong
                                                        >
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-5"></div>
                                            <div className="blog-item-title">
                                                <h3><a href=""> SDC THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2023 </a></h3>
                                                <p className="blog-item-time">12-01-2023</p>
                                                <div className="blog-item-des">
                                                    <p><strong>SDC trân trọng thông báo thời gian nghỉ Tết Nguyên Đán 2023 tới học viên và quý phụ huynh.</strong></p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="bkap" role="tabpanel" aria-labelledby="bkap-tab">
                        <div className="row m-auto">
                            <div className="col-blog-4 col-md-12 no-padding">
                                <div className="blog-item active">
                                    <div className="blog-item-img page-1"></div>
                                    <div className="blog-item-title">
                                        <h3><a href="#">THÔNG BÁO TUYỂN SINH 2024: CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ</a></h3>
                                        <p className="blog-item-time">13-02-2023</p>
                                        <div className="blog-item-des">
                                            <p><strong>CƠ HỘI TUYỂN THẲNG VÀ NHẬN HỌC BỔNG BỆ PHÓNG TÀI NĂNG LÊN TỚI 50% HỌC PHÍ DÀNH CHO 2K5.</strong></p>
                                        </div>
                                        <div className="text-center">
                                            <a href="" className="read-more">Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-blog-8 col-md-12 no-padding">
                                <div className="row no-margin">
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-2"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="#">HOT: LỊCH KHAI GIẢNG KHÓA HỌC LẬP TRÌNH JAVA FULLSTACK PLUS THÁNG 2</a></h3>
                                                <p className="blog-item-time">07-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Chào Quý Mão bùng nổ cơn bão Code, tháng 2 này SDC khai giảng lớp Java Fullstack Plus và tặng khóa lập trình C miễn phí.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="#" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-3"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="">BKAPER KHOE SẢN PHẨM CÔNG NGHỆ .NET VỚI MÔ HÌNH LÀM TRƯỚC HỌC SAU</a></h3>
                                                <p className="blog-item-time">06-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong>Sáng 4/2 vừa qua, các bạn lớp C2010I, C2010G1, C2010G2 đã có buổi bảo vệ đồ án SEM 3, trình làng các sản phẩm độc đáo bằng ngôn ngữ .NET.</strong>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-4"></div>
                                            <div className="blog-item-title">
                                                <h3><a href="">SINH VIÊN SDC RỘN RÀNG NHẬN LÌ XÌ KHAI XUÂN </a></h3>
                                                <p className="blog-item-time">01-02-2023</p>
                                                <div className="blog-item-des">
                                                    <p className="page_speed_1980330297">
                                                        <strong
                                                        >Khép lại kỳ nghỉ Tết Nguyên Đán ấm cúng,&nbsp;SDC lại rộn ràng chào đón các bạn học viên tới trường trong những ngày học tập đầu tiên của năm mới Quý Mão
                                                            2023.</strong
                                                        >
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 no-padding">
                                        <div className="blog-item">
                                            <div className="blog-item-img page-5"></div>
                                            <div className="blog-item-title">
                                                <h3><a href=""> SDC THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2023 </a></h3>
                                                <p className="blog-item-time">12-01-2023</p>
                                                <div className="blog-item-des">
                                                    <p><strong>SDC trân trọng thông báo thời gian nghỉ Tết Nguyên Đán 2023 tới học viên và quý phụ huynh.</strong></p>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="read-more">Chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="text-center">
                    <a href="#" className="load-more but-primary but-lg">Xem thêm</a>
                </div>
            </div>
        </section>
    )
}

export default BoxTechnology
