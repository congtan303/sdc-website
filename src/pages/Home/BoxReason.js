import React, { useEffect, useState } from 'react';
import '../../styles/BoxReason.css'
import imgReason1 from '../../../src/assets/image/bkap-reason-1/bkap-reason-1.png'
import imgReason2 from '../../../src/assets/image/bkap-reason-1/bkap-reason-2.png'
import imgReason3 from '../../../src/assets/image/bkap-reason-1/bkap-reason-3.png'
import imgReason4 from '../../../src/assets/image/bkap-reason-1/bkap-reason-4.png'
import axios from 'axios';
const BoxReason = () => {
  const [statistics, setStatistics] = useState([])
  
  useEffect(() => {
    axios.get('https://sdc.azurecloud.vn/api/statist-number')
      .then(response => {
        setStatistics(response.data.data)
      })
  }, [])
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
            {statistics && statistics.map(statist => (
              <div className="section-col section-col-3" key={statist.id}>
                <div className="reason-item">
                  <div className="reason-item-row">
                    <div className="reason-item-col-12">
                      <img src={statist.icon_urls} className="img-fluid lazy" alt="" />
                    </div>
                    <div className="reason-item-col-7">
                      <h2 className="text-violet"></h2>
                      <h2 className="text-violet">
                        {statist.title}
                        <span>{statist.figures}</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </section>
  )
}

export default BoxReason