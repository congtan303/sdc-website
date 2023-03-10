import React from 'react';
import '../../styles/BoxReason.css'
import imgReason1 from '../../../src/assets/image/bkap-reason-1/bkap-reason-1.png'
import imgReason2 from '../../../src/assets/image/bkap-reason-1/bkap-reason-2.png'
import imgReason3 from '../../../src/assets/image/bkap-reason-1/bkap-reason-3.png'
import imgReason4 from '../../../src/assets/image/bkap-reason-1/bkap-reason-4.png'
const BoxReason = () => {
  return (
    <section className="bkap-reason">
        <div className="container">
          <div className="section-title">
            <div className="title text-violet">
              <h1>vì sao</h1>
              <h2>
                35.000 học viên chọn
                <span>BachKhoa-Aptech?</span>
              </h2>
            </div>
          </div>
          <div className="section-content">
            <div className="section-row">
              <div className="section-col section-col-3">
                <div className="reason-item">
                  <div className="reason-item-row">
                    <div className="reason-item-col-12">
                      <img src={imgReason1} className="img-fluid lazy" alt="" />
                    </div>
                    <div className="reason-item-col-7">
                      <h2 className="text-violet"></h2>
                      <h2 className="text-violet">TOP 1 <span>Đào tạo CNTT Quốc tế tại VN</span></h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-col section-col-3">
                <div className="reason-item">
                  <div className="reason-item-row">
                    <div className="reason-item-col-12">
                      <img src={imgReason2} className="img-fluid lazy" alt="" />
                    </div>
                    <div className="reason-item-col-7">
                      <h2 className="text-violet"></h2>
                      <h2 className="text-violet">20 NĂM <span>Kinh nghiệm đào tạo CNTT</span></h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-col section-col-3">
                <div className="reason-item">
                  <div className="reason-item-row">
                    <div className="reason-item-col-12">
                      <img src={imgReason3} className="img-fluid lazy" alt="" />
                    </div>
                    <div className="reason-item-col-7">
                      <h2 className="text-violet"></h2>
                      <h2 className="text-violet">98% <span>Sinh viên có việc làm sau tốt nghiệp</span></h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-col section-col-3">
                <div className="reason-item">
                  <div className="reason-item-row">
                    <div className="reason-item-col-12">
                      <img src={imgReason4} className="img-fluid lazy" alt="" />
                    </div>
                    <div className="reason-item-col-7">
                      <h2 className="text-violet"></h2>
                      <h2 className="text-violet">75% <span>Làm việc trong các doanh nghiệp TOP 500</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BoxReason