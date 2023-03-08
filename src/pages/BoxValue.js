import React, { useState, useEffect } from 'react'
import '../styles/BoxValue.css'
import imageValue1 from '../../src/assets/image/bkap-value/bkap-value-1.jpg'
import imageValue2 from '../../src/assets/image/bkap-value/bkap-value-2.jpg'
import iconValue1 from '../../src/assets/image/bkap-value-icon/bkap-value-icon-1.png'
import iconValue2 from '../../src/assets/image/bkap-value-icon/bkap-value-icon-2.png'
import iconValue3 from '../../src/assets/image/bkap-value-icon/bkap-value-icon-3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BoxValue = () => {

  return (
   <section className="bkap-value">
        <div className="container">
          <div className="section-title">
            <div className="title text-violet">
              <h2><span>Chúng tôi đem đến cho bạn</span></h2>
            </div>
          </div>
          <div className="section-content">
            <div className="slide-value">
              <input type="radio" name="slider" className="d-none" id="s1" defaultChecked />
              <input type="radio" name="slider" className="d-none" id="s2" />
              <input type="radio" name="slider" className="d-none" id="s3" />
              <input type="radio" name="slider" className="d-none" id="s4" />
              <input type="radio" name="slider" className="d-none" id="s5" />

              <div className="cards inner">
                <label htmlFor="s1" id="slide1">
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={iconValue1} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>VĂN BẰNG QUỐC TẾ</h3>
                            <ul>
                              <li>
                                <p>Văn bằng Aptech chuẩn quốc tế có giá trị trên 60 quốc gia</p>
                              </li>
                              <li><p>Cơ hội nhận bằng Đại học chính quy trong nước</p></li>
                              <li><p>Hộ chiếu IT được các doanh nghiệp công nhận</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={imageValue1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>

                <label htmlFor="s2" id="slide2">
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={iconValue2} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>TIỆN ÍCH HỖ TRỢ</h3>
                            <ul>
                              <li>Hỗ trợ 24/7</li>
                              <li>Tư vấn 1:1</li>
                              <li>Bảo hành trọn đời, miễn phí cập nhật công nghệ mới</li>
                              <li>Tặng khóa tiếng Anh, kỹ năng mềm cho IT Leader 4.0</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={imageValue2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>

                <label htmlFor="s3" id="slide3">
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={iconValue1} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>DỊCH VỤ CHẤT LƯỢNG CAO</h3>
                            <ul>
                              <li>Học bổng dành riêng cho lớp Chất lượng cao</li>
                              <li>Miễn phí sử dụng phòng học sáng tạo</li>
                              <li>Miễn phí các chương trình ngoại khóa của BKAP</li>
                              <li>Miễn phí sử dụng hệ thống thực tập và dịch vụ hỗ trợ việc làm</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={imageValue1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>

                <label htmlFor="s4" id="slide4">
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={iconValue2} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>LÀM TRƯỚC HỌC SAU</h3>
                            <ul>
                              <li>75% thực hành, bỏ túi ít nhất 6 sản phẩm thực tế</li>
                              <li>Thực hành sâu và liên tục cùng giảng viên doanh nghiệp</li>
                              <li>Tham gia dự án tại doanh nghiệp ngay trong quá trình học</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={imageValue2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>

                <label htmlFor="s5" id="slide5">
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={iconValue1} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>HỌC LÀ LÀM ĐƯỢC VIỆC</h3>
                            <ul>
                              <li>Ký cam kết việc làm tại doanh nghiệp ngay từ khi nhập học</li>
                              <li>100% học viên tốt nghiệp có việc làm, mức lương 10 triệu đồng trở lên</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={imageValue1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BoxValue