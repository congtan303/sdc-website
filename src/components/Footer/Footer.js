import React from "react";
import Iframe from "react-iframe";
import "../../styles/footer.css";
import logoBk from "../../assets/image/logo/logo-bkap-edu.png";
import logoBKG from "../../assets/image/logo/bkap-gr-250.png";

const Footer = () => {
  return (
    <footer className="footer-layout">
      <div className="footer-wrapper">
        <div className="container">
          <div className="top-footer text-center">
            <div className="footer-logo d-flex align-items-end justify-content-center">
              <div className="logo-item">
                <a href="#">
                  <img src={logoBk} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="logo-item">
                <a href="#">
                  <img src={logoBKG} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
            <h2>HỆ THỐNG ĐÀO TẠO CNTT QUỐC TẾ SDC </h2>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="d-flex justify-content-around">
                  <span>
                    <i className="fa-solid fa-phone"></i> HOTLINE: <b>0968276996</b>
                  </span>
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-footer">
            <div className="row">
              <div className="col-lg-12 col-xl-3">
                <div className="mid-footer-item">
                  <h3>Liên hệ</h3>
                  <ul className="nav-f-contact">
                    <li>
                      <div className="row">
                        <div className="col-2 col-xl-3">
                          <i className="fa-regular fa-map"></i>
                        </div>
                        <div className="col-10 col-xl-9">41 Lê Duẩn, Hải Châu 1, Hải Châu, Đà Nẵng.</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-2 col-xl-3">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="col-10 col-xl-9">Hotline: 0968276996</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-2 col-xl-3">
                          <i className="fa-regular fa-envelope-open"></i>
                        </div>
                        <div className="col-10 col-xl-9">Email: tuyensinh@sdc.edu.vn</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-xl-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mid-footer-item">
                      <h3>VỀ SDC</h3>
                      <ul>
                        <li>
                          <a href="#">Giới thiệu chung</a>
                        </li>
                        <li>
                          <a href="#">Tuyển sinh</a>
                        </li>
                        <li>
                          <a href="#">Tuyển dụng</a>
                        </li>
                        <li>
                          <a href="#">Liên hệ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mid-footer-item">
                      <h3>CÁC KHÓA HỌC</h3>
                      <ul>
                        <li>
                          <a href="#">Lập trình viên quốc tế</a>
                        </li>
                        <li>
                          <a href="#">Quản trị mạng và bảo mật</a>
                        </li>
                        <li>
                          <a href="#">Kiểm thử phần mềm</a>
                        </li>
                        <li>
                          <a href="#">Lập trình Java Web</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-4 col-md-12">
                <div className="mid-footer-item">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.895552434537!2d108.21799931416994!3d16.07090894366332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218314b9a71b7%3A0x3aa3d7cc91ab2372!2zNDEgxJAuIEzDqiBEdeG6qW4sIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676877785598!5m2!1svi!2s"
                    height="300"
                    style="border: 0"
                    allowfullscreen="true"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="address-location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bot-footer">
          <p>Công Ty Cổ Phần Đào Tạo Và Chuyển Giao Công Nghệ Cao Bách Khoa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
