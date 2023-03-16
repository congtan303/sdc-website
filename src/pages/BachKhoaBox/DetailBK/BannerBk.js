import React from "react";
import "../../../styles/bkStyle/BannerBk.css";
import imgBk from "../../../assets/image/BachKhoa/bannerBachKhoa.jpg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import iconBook from "../../../assets/image/BachKhoa/book-img.png";
import iconBook1 from "../../../assets/image/BachKhoa/technogoly-img.png";
import iconBook2 from "../../../assets/image/BachKhoa/data-img.png";
const BannerBk = () => {
  return (
    <div>
      <section className="banner-bk">
        <div className="inner-header-title">
          <img src={imgBk} alt="img-Bk" className="img-fluid" />
          <div className="inner-header-title-caps">
            <div className="container">
              <h3 className="title-Banner1">Hành trình 21 năm </h3>
              <h2 className="title-Banner2">ĐÀO TẠO NHÂN LỰC CNTT </h2>
              <h3 className="title-Banner3">Chất lượng cao (2003 - 2023) </h3>
              <p>
                Vì <span className="title-banner4">1 triệu </span> nhân lực CNTT chất lượng cao
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <div className="section-title">
              <div className="title text-violet">
                <h2>
                  <span>LỊCH SỬ HÌNH THÀNH</span>
                </h2>
              </div>
            </div>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg="4" md="4" sm="6">
              <div className="card-history">
                <div className="card-img">
                  <img src={iconBook} alt="iconBook" />
                </div>
                <h4>BACHKHOA-APTECH</h4>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6">
              <div className="card-history">
                <div className="card-img">
                  <img src={iconBook1} alt="iconBook" />
                </div>
                <h4>BKSOFT</h4>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6">
              <div className="card-history">
                <div className="card-img">
                  <img src={iconBook2} alt="iconBook" />
                </div>
                <h4>BK-NEF</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BannerBk;
