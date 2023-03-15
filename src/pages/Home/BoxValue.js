import React, { useState, useEffect } from 'react'
import '../../styles/BoxValue.css'
import imageValue1 from '../../../src/assets/image/bkap-value/bkap-value-1.jpg'
import imageValue2 from '../../../src/assets/image/bkap-value/bkap-value-2.jpg'
import iconValue1 from '../../../src/assets/image/bkap-value-icon/bkap-value-icon-1.png'
import iconValue2 from '../../../src/assets/image/bkap-value-icon/bkap-value-icon-2.png'
import iconValue3 from '../../../src/assets/image/bkap-value-icon/bkap-value-icon-3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

const BoxValue = () => {
  const [checked, setChecked] = useState(true)
  const [benefits, setBenefits] = useState([])
  useEffect(() => {
    axios.get('https://sdc.azurecloud.vn/api/benefit-courses')
      .then(response => {
        console.log(response.data.data);
        setBenefits(response.data.data)
      })
  }, [])

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
            {benefits && benefits.map((benefit, index) => (
              <input
                type="radio"
                name="slider"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
                className="d-none" id={`s${index + 1}`}
              />
            ))}
            {/* <input type="radio" name="slider" className="d-none" id="s1" defaultChecked />
              <input type="radio" name="slider" className="d-none" id="s2"  />
              <input type="radio" name="slider" className="d-none" id="s3" />
              <input type="radio" name="slider" className="d-none" id="s4" />
              <input type="radio" name="slider" className="d-none" id="s5" /> */}

            <div className="cards inner">
              {benefits && benefits.map((benefit, index) => (
                <label htmlFor={`s${index + 1}`} id={`slide${index + 1}`}>
                  <div className="card">
                    <div className="card-row">
                      <div className="card-col-8">
                        <div className="card-row">
                          <div className="card-col-3">
                            <img src={benefit.icon_url} alt="lazy" />
                          </div>
                          <div className="card-col-9">
                            <h3>{benefit.title}</h3>
                            <ul>
                              <li>
                                <p dangerouslySetInnerHTML={{__html:benefit.content}}></p>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-col-4">
                        <div className="value-item-img">
                          <img src={benefit.image_url} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              ))}



            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoxValue